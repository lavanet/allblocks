import { ProviderOptimizer as ProviderOptimizerInterface } from "../lavasession/consumerTypes";
import BigNumber from "bignumber.js";
import { ScoreStore } from "../util/score/decayScore";
import { QualityOfServiceReport } from "../grpc_web_services/lavanet/lava/pairing/relay_pb";
export declare const FLOAT_PRECISION = 8;
export declare const DECIMAL_PRECISION = 36;
export declare const DEFAULT_EXPLORATION_CHANCE = 0.1;
export declare const COST_EXPLORATION_CHANCE = 0.01;
export interface ProviderData {
    availability: ScoreStore;
    latency: ScoreStore;
    sync: ScoreStore;
    syncBlock: number;
}
export interface BlockStore {
    block: number;
    time: number;
}
export declare enum ProviderOptimizerStrategy {
    Balanced = 0,
    Latency = 1,
    SyncFreshness = 2,
    Cost = 3,
    Privacy = 4,
    Accuracy = 5
}
export declare class ProviderOptimizer implements ProviderOptimizerInterface {
    private readonly strategy;
    private readonly providersStorage;
    private readonly providerRelayStats;
    private readonly averageBlockTime;
    private readonly baseWorldLatency;
    private readonly wantedNumProvidersInConcurrency;
    private readonly latestSyncData;
    constructor(strategy: ProviderOptimizerStrategy, averageBlockTime: number, baseWorldLatency: number, wantedNumProvidersInConcurrency: number);
    appendProbeRelayData(providerAddress: string, latency: number, success: boolean): void;
    appendRelayData(providerAddress: string, latency: number, isHangingApi: boolean, cu: number, syncBlock: number): void;
    appendRelayFailure(providerAddress: string): void;
    private appendRelay;
    chooseProvider(allAddresses: Set<string>, ignoredProviders: Set<string>, cu: number, requestedBlock: number, perturbationPercentage: number): string[];
    getExcellenceQoSReportForProvider(providerAddress: string): QualityOfServiceReport | undefined;
    calculateProbabilityOfTimeout(availabilityScore: ScoreStore): number;
    calculateProbabilityOfBlockError(requestedBlock: number, providerData: ProviderData): number;
    private shouldExplore;
    private isBetterProviderScore;
    private calculateSyncScore;
    private calculateLatencyScore;
    private calculateSyncLag;
    private updateLatestSyncData;
    private getProviderData;
    private updateProbeEntrySync;
    private updateProbeEntryAvailability;
    private updateProbeEntryLatency;
    private updateRelayTime;
    private calculateHalfTime;
    private getRelayStatsTimeDiff;
    private getRelayStatsTime;
}
export declare function cumulativeProbabilityFunctionForPoissonDist(kEvents: number, lambda: number): number;
export declare function perturbWithNormalGaussian(orig: number, percentage: number): number;
/**
 * This function is just to keep parity with the original golang implementation
 * @param value
 * @param precision
 */
export declare function floatToBigNumber(value: number, precision: number): BigNumber;
