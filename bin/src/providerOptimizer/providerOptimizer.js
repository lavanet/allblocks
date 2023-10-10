"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatToBigNumber = exports.perturbWithNormalGaussian = exports.cumulativeProbabilityFunctionForPoissonDist = exports.ProviderOptimizer = exports.ProviderOptimizerStrategy = exports.COST_EXPLORATION_CHANCE = exports.DEFAULT_EXPLORATION_CHANCE = exports.DECIMAL_PRECISION = exports.FLOAT_PRECISION = void 0;
const lru_cache_1 = require("lru-cache");
const logger_1 = require("../logger/logger");
const random_1 = __importDefault(require("random"));
const math_base_special_gammainc_1 = __importDefault(require("@stdlib/math-base-special-gammainc"));
const timeout_1 = require("../common/timeout");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const time_1 = require("../util/time");
const decayScore_1 = require("../util/score/decayScore");
const relay_pb_1 = require("../grpc_web_services/lavanet/lava/pairing/relay_pb");
const CACHE_OPTIONS = {
    max: 2000,
};
const HALF_LIFE_TIME = time_1.hourInMillis;
const MAX_HALF_TIME = 14 * 24 * time_1.hourInMillis;
const PROBE_UPDATE_WEIGHT = 0.25;
const RELAY_UPDATE_WEIGHT = 1;
const INITIAL_DATA_STALENESS = 24;
exports.FLOAT_PRECISION = 8;
exports.DECIMAL_PRECISION = 36;
exports.DEFAULT_EXPLORATION_CHANCE = 0.1;
exports.COST_EXPLORATION_CHANCE = 0.01;
var ProviderOptimizerStrategy;
(function (ProviderOptimizerStrategy) {
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["Balanced"] = 0] = "Balanced";
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["Latency"] = 1] = "Latency";
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["SyncFreshness"] = 2] = "SyncFreshness";
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["Cost"] = 3] = "Cost";
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["Privacy"] = 4] = "Privacy";
    ProviderOptimizerStrategy[ProviderOptimizerStrategy["Accuracy"] = 5] = "Accuracy";
})(ProviderOptimizerStrategy = exports.ProviderOptimizerStrategy || (exports.ProviderOptimizerStrategy = {}));
class ProviderOptimizer {
    constructor(strategy, averageBlockTime, baseWorldLatency, wantedNumProvidersInConcurrency) {
        this.providersStorage = new lru_cache_1.LRUCache(CACHE_OPTIONS);
        this.providerRelayStats = new lru_cache_1.LRUCache(CACHE_OPTIONS);
        this.latestSyncData = {
            block: 0,
            time: 0,
        };
        if (averageBlockTime <= 0) {
            throw new Error("averageBlockTime must be higher than 0");
        }
        this.strategy = strategy;
        this.averageBlockTime = averageBlockTime;
        this.baseWorldLatency = baseWorldLatency;
        if (strategy === ProviderOptimizerStrategy.Privacy) {
            wantedNumProvidersInConcurrency = 1;
        }
        this.wantedNumProvidersInConcurrency = wantedNumProvidersInConcurrency;
    }
    appendProbeRelayData(providerAddress, latency, success) {
        let { providerData } = this.getProviderData(providerAddress);
        const sampleTime = (0, time_1.now)();
        const halfTime = this.calculateHalfTime(providerAddress, sampleTime);
        providerData = this.updateProbeEntryAvailability(providerData, success, PROBE_UPDATE_WEIGHT, halfTime, sampleTime);
        if (success && latency > 0) {
            providerData = this.updateProbeEntryLatency(providerData, latency, this.baseWorldLatency, PROBE_UPDATE_WEIGHT, halfTime, sampleTime);
        }
        this.providersStorage.set(providerAddress, providerData);
        logger_1.Logger.debug("probe update", providerAddress, latency, success);
    }
    appendRelayData(providerAddress, latency, isHangingApi, cu, syncBlock) {
        this.appendRelay(providerAddress, latency, isHangingApi, true, cu, syncBlock, (0, time_1.now)());
    }
    appendRelayFailure(providerAddress) {
        this.appendRelay(providerAddress, 0, false, false, 0, 0, (0, time_1.now)());
    }
    appendRelay(providerAddress, latency, isHangingApi, success, cu, syncBlock, sampleTime) {
        const { block, time } = this.updateLatestSyncData(syncBlock, sampleTime);
        let { providerData } = this.getProviderData(providerAddress);
        const halfTime = this.calculateHalfTime(providerAddress, sampleTime);
        providerData = this.updateProbeEntryAvailability(providerData, success, RELAY_UPDATE_WEIGHT, halfTime, sampleTime);
        if (success) {
            if (latency > 0) {
                let baseLatency = this.baseWorldLatency + (0, timeout_1.baseTimePerCU)(cu);
                if (isHangingApi) {
                    baseLatency += this.averageBlockTime;
                }
                providerData = this.updateProbeEntryLatency(providerData, latency, baseLatency, RELAY_UPDATE_WEIGHT, halfTime, sampleTime);
            }
            if (syncBlock > providerData.syncBlock) {
                providerData.syncBlock = syncBlock;
            }
            const syncLag = this.calculateSyncLag(block, time, providerData.syncBlock, sampleTime);
            providerData = this.updateProbeEntrySync(providerData, syncLag, this.averageBlockTime, halfTime, sampleTime);
        }
        this.providersStorage.set(providerAddress, providerData);
        this.updateRelayTime(providerAddress, sampleTime);
        logger_1.Logger.debug("relay update", syncBlock, cu, providerAddress, latency, success);
    }
    chooseProvider(allAddresses, ignoredProviders, cu, requestedBlock, perturbationPercentage) {
        const returnedProviders = [""];
        let latencyScore = Number.MAX_VALUE;
        let syncScore = Number.MAX_VALUE;
        const numProviders = allAddresses.size;
        for (const providerAddress of allAddresses) {
            if (ignoredProviders.has(providerAddress)) {
                continue;
            }
            const { providerData } = this.getProviderData(providerAddress);
            let latencyScoreCurrent = this.calculateLatencyScore(providerData, cu, requestedBlock);
            latencyScoreCurrent = perturbWithNormalGaussian(latencyScoreCurrent, perturbationPercentage);
            let syncScoreCurrent = 0;
            if (requestedBlock < 0) {
                syncScoreCurrent = this.calculateSyncScore(providerData.sync);
                syncScoreCurrent = perturbWithNormalGaussian(syncScoreCurrent, perturbationPercentage);
            }
            logger_1.Logger.debug("scores information", {
                providerAddress,
                latencyScoreCurrent,
                syncScoreCurrent,
                latencyScore,
                syncScore,
            });
            const isBetterProviderScore = this.isBetterProviderScore(latencyScore, latencyScoreCurrent, syncScore, syncScoreCurrent);
            if (isBetterProviderScore || returnedProviders.length === 0) {
                if (returnedProviders[0] !== "" &&
                    this.shouldExplore(returnedProviders.length, numProviders)) {
                    returnedProviders.push(returnedProviders[0]);
                }
                returnedProviders[0] = providerAddress;
                latencyScore = latencyScoreCurrent;
                syncScore = syncScoreCurrent;
                continue;
            }
            if (this.shouldExplore(returnedProviders.length, numProviders)) {
                returnedProviders.push(providerAddress);
            }
        }
        logger_1.Logger.debug("returned providers", {
            providers: returnedProviders.join(","),
            cu,
        });
        return returnedProviders;
    }
    getExcellenceQoSReportForProvider(providerAddress) {
        const { providerData, found } = this.getProviderData(providerAddress);
        if (!found) {
            return;
        }
        const latencyScore = floatToBigNumber(providerData.latency.num / providerData.latency.denom, exports.FLOAT_PRECISION);
        const syncScore = floatToBigNumber(providerData.sync.num / providerData.sync.denom, exports.FLOAT_PRECISION);
        const availabilityScore = floatToBigNumber(providerData.availability.num / providerData.availability.denom, exports.FLOAT_PRECISION);
        const report = new relay_pb_1.QualityOfServiceReport();
        report.setLatency(latencyScore.toFixed());
        report.setAvailability(availabilityScore.toFixed());
        report.setSync(syncScore.toFixed());
        logger_1.Logger.debug("QoS excellence for provider", {
            providerAddress,
            report,
        });
        return report;
    }
    calculateProbabilityOfTimeout(availabilityScore) {
        const probabilityTimeout = 0;
        if (availabilityScore.denom > 0) {
            const mean = availabilityScore.num / availabilityScore.denom;
            return 1 - mean;
        }
        return probabilityTimeout;
    }
    calculateProbabilityOfBlockError(requestedBlock, providerData) {
        let probabilityBlockError = 0;
        if (requestedBlock > 0 &&
            providerData.syncBlock < requestedBlock &&
            providerData.syncBlock > 0) {
            const averageBlockTime = (0, time_1.millisToSeconds)(this.averageBlockTime);
            const blockDistanceRequired = requestedBlock - providerData.syncBlock;
            if (blockDistanceRequired > 0) {
                const timeSinceSyncReceived = (0, time_1.millisToSeconds)((0, time_1.now)() - providerData.sync.time);
                const eventRate = timeSinceSyncReceived / averageBlockTime;
                probabilityBlockError = cumulativeProbabilityFunctionForPoissonDist(blockDistanceRequired - 1, eventRate);
            }
            else {
                probabilityBlockError = 0;
            }
        }
        return probabilityBlockError;
    }
    shouldExplore(currentNumProviders, numProviders) {
        if (currentNumProviders >= this.wantedNumProvidersInConcurrency) {
            return false;
        }
        let explorationChance = exports.DEFAULT_EXPLORATION_CHANCE;
        switch (this.strategy) {
            case ProviderOptimizerStrategy.Latency:
                return true;
            case ProviderOptimizerStrategy.Accuracy:
                return true;
            case ProviderOptimizerStrategy.Cost:
                explorationChance = exports.COST_EXPLORATION_CHANCE;
                break;
            case ProviderOptimizerStrategy.Privacy:
                return false;
        }
        return random_1.default.float() < explorationChance / numProviders;
    }
    isBetterProviderScore(latencyScore, latencyScoreCurrent, syncScore, syncScoreCurrent) {
        let latencyWeight;
        switch (this.strategy) {
            case ProviderOptimizerStrategy.Latency:
                latencyWeight = 0.9;
                break;
            case ProviderOptimizerStrategy.SyncFreshness:
                latencyWeight = 0.2;
                break;
            case ProviderOptimizerStrategy.Privacy:
                return random_1.default.int(0, 2) === 0;
            default:
                latencyWeight = 0.8;
        }
        if (syncScoreCurrent === 0) {
            return latencyScore > latencyScoreCurrent;
        }
        return (latencyScore * latencyWeight + syncScore * (1 - latencyWeight) >
            latencyScoreCurrent * latencyWeight +
                syncScoreCurrent * (1 - latencyWeight));
    }
    calculateSyncScore(syncScore) {
        let historicalSyncLatency = 0;
        if (syncScore.denom === 0) {
            historicalSyncLatency = 0;
        }
        else {
            historicalSyncLatency =
                (syncScore.num / syncScore.denom) * this.averageBlockTime;
        }
        return (0, time_1.millisToSeconds)(historicalSyncLatency);
    }
    calculateLatencyScore(providerData, cu, requestedBlock) {
        const baseLatency = this.baseWorldLatency + (0, timeout_1.baseTimePerCU)(cu) / 2;
        const timeoutDuration = (0, timeout_1.getTimePerCu)(cu);
        let historicalLatency = 0;
        if (providerData.latency.denom === 0) {
            historicalLatency = baseLatency;
        }
        else {
            historicalLatency =
                (baseLatency * providerData.latency.num) / providerData.latency.denom;
        }
        if (historicalLatency > timeoutDuration) {
            historicalLatency = timeoutDuration;
        }
        const probabilityBlockError = this.calculateProbabilityOfBlockError(requestedBlock, providerData);
        const probabilityOfTimeout = this.calculateProbabilityOfTimeout(providerData.availability);
        const probabilityOfSuccess = (1 - probabilityBlockError) * (1 - probabilityOfTimeout);
        const historicalLatencySeconds = (0, time_1.millisToSeconds)(historicalLatency);
        const baseLatencySeconds = (0, time_1.millisToSeconds)(baseLatency);
        const costBlockError = historicalLatencySeconds + baseLatencySeconds;
        const costTimeout = (0, time_1.millisToSeconds)(timeoutDuration) + baseLatencySeconds;
        const costSuccess = historicalLatencySeconds;
        logger_1.Logger.debug("latency calculation breakdown", {
            probabilityBlockError,
            costBlockError,
            probabilityOfTimeout,
            costTimeout,
            probabilityOfSuccess,
            costSuccess,
        });
        return (probabilityBlockError * costBlockError +
            probabilityOfTimeout * costTimeout +
            probabilityOfSuccess * costSuccess);
    }
    calculateSyncLag(latestSync, timeSync, providerBlock, sampleTime) {
        if (latestSync <= providerBlock) {
            return 0;
        }
        const timeLag = sampleTime - timeSync;
        const firstBlockLag = Math.min(this.averageBlockTime, timeLag);
        const blocksGap = latestSync - providerBlock - 1;
        const blocksGapTime = blocksGap * this.averageBlockTime;
        return firstBlockLag + blocksGapTime;
    }
    updateLatestSyncData(providerLatestBlock, sampleTime) {
        const latestBlock = this.latestSyncData.block;
        if (latestBlock < providerLatestBlock) {
            this.latestSyncData.block = providerLatestBlock;
            this.latestSyncData.time = sampleTime;
        }
        return this.latestSyncData;
    }
    getProviderData(providerAddress) {
        let data = this.providersStorage.get(providerAddress);
        const found = data !== undefined;
        if (!found) {
            const time = -1 * INITIAL_DATA_STALENESS * time_1.hourInMillis;
            data = {
                availability: new decayScore_1.ScoreStore(0.99, 1, (0, time_1.now)() + time),
                latency: new decayScore_1.ScoreStore(2, 1, (0, time_1.now)() + time),
                sync: new decayScore_1.ScoreStore(2, 1, (0, time_1.now)() + time),
                syncBlock: 0,
            };
        }
        return { providerData: data, found };
    }
    updateProbeEntrySync(providerData, sync, baseSync, halfTime, sampleTime) {
        const newScore = new decayScore_1.ScoreStore((0, time_1.millisToSeconds)(sync), (0, time_1.millisToSeconds)(baseSync), sampleTime);
        const oldScore = providerData.sync;
        providerData.sync = decayScore_1.ScoreStore.calculateTimeDecayFunctionUpdate(oldScore, newScore, halfTime, RELAY_UPDATE_WEIGHT, sampleTime);
        return providerData;
    }
    updateProbeEntryAvailability(providerData, success, weight, halfTime, sampleTime) {
        const newNumerator = Number(success); // true = 1, false = 0
        const oldScore = providerData.availability;
        const newScore = new decayScore_1.ScoreStore(newNumerator, 1, sampleTime);
        providerData.availability = decayScore_1.ScoreStore.calculateTimeDecayFunctionUpdate(oldScore, newScore, halfTime, weight, sampleTime);
        return providerData;
    }
    updateProbeEntryLatency(providerData, latency, baseLatency, weight, halfTime, sampleTime) {
        const newScore = new decayScore_1.ScoreStore((0, time_1.millisToSeconds)(latency), (0, time_1.millisToSeconds)(baseLatency), sampleTime);
        const oldScore = providerData.latency;
        providerData.latency = decayScore_1.ScoreStore.calculateTimeDecayFunctionUpdate(oldScore, newScore, halfTime, weight, sampleTime);
        return providerData;
    }
    updateRelayTime(providerAddress, sampleTime) {
        const relayStatsTime = this.getRelayStatsTime(providerAddress);
        relayStatsTime.push(sampleTime);
        this.providerRelayStats.set(providerAddress, relayStatsTime);
    }
    calculateHalfTime(providerAddress, sampleTime) {
        const relaysHalfTime = this.getRelayStatsTimeDiff(providerAddress, sampleTime);
        let halfTime = HALF_LIFE_TIME;
        if (relaysHalfTime > halfTime) {
            halfTime = relaysHalfTime;
        }
        if (halfTime > MAX_HALF_TIME) {
            halfTime = MAX_HALF_TIME;
        }
        return halfTime;
    }
    getRelayStatsTimeDiff(providerAddress, sampleTime) {
        const relayStatsTime = this.getRelayStatsTime(providerAddress);
        if (relayStatsTime.length === 0) {
            return 0;
        }
        const idx = Math.floor((relayStatsTime.length - 1) / 2);
        const diffTime = sampleTime - relayStatsTime[idx];
        if (diffTime < 0) {
            return (0, time_1.now)() - relayStatsTime[idx];
        }
        return diffTime;
    }
    getRelayStatsTime(providerAddress) {
        return this.providerRelayStats.get(providerAddress) || [];
    }
}
exports.ProviderOptimizer = ProviderOptimizer;
function cumulativeProbabilityFunctionForPoissonDist(kEvents, lambda) {
    return 1 - (0, math_base_special_gammainc_1.default)(lambda, kEvents + 1);
}
exports.cumulativeProbabilityFunctionForPoissonDist = cumulativeProbabilityFunctionForPoissonDist;
function perturbWithNormalGaussian(orig, percentage) {
    const normal = random_1.default.normal();
    const perturb = normal() * percentage * orig;
    return orig + perturb;
}
exports.perturbWithNormalGaussian = perturbWithNormalGaussian;
/**
 * This function is just to keep parity with the original golang implementation
 * @param value
 * @param precision
 */
function floatToBigNumber(value, precision) {
    const x = Math.pow(10, precision);
    const intVal = Math.round(value * x);
    return (0, bignumber_js_1.default)(intVal / x);
}
exports.floatToBigNumber = floatToBigNumber;
