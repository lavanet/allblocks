"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCConsumerServer = void 0;
const logger_1 = require("../logger/logger");
const request_builder_1 = require("../lavaprotocol/request_builder");
const relay_pb_1 = require("../grpc_web_services/lavanet/lava/pairing/relay_pb");
const errors_1 = __importDefault(require("../sdk/errors"));
const timeout_1 = require("../common/timeout");
const common_1 = require("../common/common");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const common_2 = require("../util/common");
const MaxRelayRetries = 4;
class RPCConsumerServer {
    constructor(relayer, consumerSessionManager, chainParser, geolocation, rpcEndpoint, lavaChainId, finalizationConsensus) {
        this.consumerSessionManager = consumerSessionManager;
        this.geolocation = geolocation;
        this.chainParser = chainParser;
        this.relayer = relayer;
        this.rpcEndpoint = rpcEndpoint;
        this.lavaChainId = lavaChainId;
        this.consumerAddress = "TODO"; // TODO: this needs to be the public address that the provider signs finalization data with, check on badges if it's the signer or the badge project key
        this.finalizationConsensus = finalizationConsensus;
    }
    // returning getSessionManager for debugging / data reading.
    getSessionManager() {
        return this.consumerSessionManager;
    }
    setChainParser(chainParser) {
        this.chainParser = chainParser;
    }
    supportedChainAndApiInterface() {
        return {
            specId: this.rpcEndpoint.chainId,
            apiInterface: this.rpcEndpoint.apiInterface,
        };
    }
    sendRelay(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const chainMessage = this.chainParser.parseMsg(options);
            const unwantedProviders = new Set();
            const relayData = Object.assign(Object.assign({}, chainMessage.getRawRequestData()), { connectionType: (_b = (_a = chainMessage.getApiCollection().getCollectionData()) === null || _a === void 0 ? void 0 : _a.getType()) !== null && _b !== void 0 ? _b : "", apiInterface: this.rpcEndpoint.apiInterface, chainId: this.rpcEndpoint.chainId, requestedBlock: chainMessage.getRequestedBlock(), headers: chainMessage.getRPCMessage().getHeaders() });
            const relayPrivateData = (0, request_builder_1.newRelayData)(relayData);
            let blockOnSyncLoss = true;
            const errors = new Array();
            for (let retries = 0; retries < MaxRelayRetries; retries++) {
                const relayResult = yield this.sendRelayToProvider(chainMessage, relayPrivateData, unwantedProviders);
                if (relayResult instanceof Array) {
                    // relayResult can be an Array of errors from relaying to multiple providers
                    for (const oneResult of relayResult) {
                        if (blockOnSyncLoss && oneResult.err == errors_1.default.sessionSyncLoss) {
                            logger_1.Logger.debug("Identified SyncLoss in provider, not removing it from list for another attempt");
                            blockOnSyncLoss = false;
                        }
                        else {
                            unwantedProviders.add(oneResult.providerAddress);
                        }
                        errors.push(oneResult.err);
                    }
                }
                else if (relayResult instanceof Error) {
                    errors.push(relayResult);
                }
                else {
                    if (errors.length > 0) {
                        logger_1.Logger.warn("relay succeeded but had some errors", ...errors);
                    }
                    return relayResult;
                }
            }
            // got here if didn't succeed in any of the relays
            throw new Error("failed all retries " + errors.join(","));
        });
    }
    sendRelayToProvider(chainMessage, relayData, unwantedProviders) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = chainMessage.getApi().getCategory()) === null || _a === void 0 ? void 0 : _a.getSubscription()) == true) {
                return new Error("subscription currently not supported");
            }
            const chainID = this.rpcEndpoint.chainId;
            const lavaChainId = this.lavaChainId;
            let extraRelayTimeout = 0;
            const isHangingapi = ((_b = chainMessage.getApi().getCategory()) === null || _b === void 0 ? void 0 : _b.getHangingApi()) == true;
            if (isHangingapi) {
                const { averageBlockTime } = this.chainParser.chainBlockStats();
                extraRelayTimeout = averageBlockTime;
            }
            const relayTimeout = extraRelayTimeout +
                (0, timeout_1.getTimePerCu)(chainMessage.getApi().getComputeUnits()) +
                timeout_1.AverageWorldLatency;
            const consumerSessionsMap = this.consumerSessionManager.getSessions(chainMessage.getApi().getComputeUnits(), unwantedProviders, common_1.LATEST_BLOCK, "", []);
            if (consumerSessionsMap instanceof Error) {
                return consumerSessionsMap;
            }
            if (consumerSessionsMap.size == 0) {
                return new Error("returned empty consumerSessionsMap");
            }
            let finalRelayResult;
            let responsesReceived = 0;
            const trySetFinalRelayResult = (res) => {
                const isError = res instanceof Error || Array.isArray(res);
                if (!isError && finalRelayResult === undefined) {
                    finalRelayResult = res;
                }
                if (finalRelayResult === undefined &&
                    responsesReceived == consumerSessionsMap.size) {
                    finalRelayResult = res;
                }
            };
            const promises = [];
            for (const [providerPublicAddress, sessionInfo] of consumerSessionsMap) {
                const relayResult = {
                    providerAddress: providerPublicAddress,
                    request: undefined,
                    reply: undefined,
                    finalized: false,
                };
                const singleConsumerSession = sessionInfo.session;
                const epoch = sessionInfo.epoch;
                const reportedProviders = sessionInfo.reportedProviders;
                relayResult.request = (0, request_builder_1.constructRelayRequest)(lavaChainId, chainID, relayData, providerPublicAddress, singleConsumerSession, epoch, reportedProviders);
                // Add timeout to the relay for the provider
                // We're doing this here because we don't want to calculate the hash with this header
                const timeoutMetadata = new relay_pb_1.Metadata();
                timeoutMetadata.setName("lava-sdk-relay-timeout");
                timeoutMetadata.setValue(relayTimeout.toString());
                relayData.addMetadata(timeoutMetadata);
                logger_1.Logger.debug(`sending relay to provider ${providerPublicAddress}`);
                const promise = this.relayInner(singleConsumerSession, relayResult, chainMessage, relayTimeout)
                    .then((relayResponse) => {
                    responsesReceived++;
                    if (relayResponse.err != undefined) {
                        const callSessionFailure = () => {
                            const err = this.consumerSessionManager.onSessionFailure(singleConsumerSession, relayResponse.err);
                            if (err instanceof Error) {
                                logger_1.Logger.error("failed on session failure %s", err);
                            }
                        };
                        if (relayResponse.backoff) {
                            const backOffDuration = common_1.BACKOFF_TIME_ON_FAILURE;
                            setTimeout(callSessionFailure, backOffDuration); // call sessionFailure after a delay
                        }
                        else {
                            callSessionFailure();
                        }
                        const relayError = {
                            providerAddress: providerPublicAddress,
                            err: relayResponse.err,
                        };
                        const response = [relayError];
                        trySetFinalRelayResult(response);
                        return response;
                    }
                    const reply = relayResult.reply;
                    if (reply == undefined) {
                        const err = new Error("reply is undefined");
                        trySetFinalRelayResult(err);
                        return err;
                    }
                    // we got here if everything is valid
                    const { expectedBlockHeight, numOfProviders } = this.finalizationConsensus.getExpectedBlockHeight(this.chainParser);
                    const pairingAddressesLen = this.consumerSessionManager.getPairingAddressesLength();
                    const latestBlock = reply.getLatestBlock();
                    this.consumerSessionManager.onSessionDone(singleConsumerSession, latestBlock, chainMessage.getApi().getComputeUnits(), relayResponse.latency, singleConsumerSession.calculateExpectedLatency(relayTimeout), expectedBlockHeight, numOfProviders, pairingAddressesLen, isHangingapi);
                    trySetFinalRelayResult(relayResult);
                    return relayResult;
                })
                    .catch((err) => {
                    if (err instanceof Error) {
                        return err;
                    }
                    return new Error("unsupported error " + err);
                });
                promises.push(promise);
            }
            const response = yield (0, common_2.promiseAny)(promises);
            if (response instanceof Error) {
                return response;
            }
            // this should never happen, but we need to satisfy the typescript compiler
            if (finalRelayResult === undefined) {
                return new Error("finalRelayResult is undefined");
            }
            return finalRelayResult;
        });
    }
    relayInner(singleConsumerSession, relayResult, chainMessage, relayTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            const relayRequest = relayResult.request;
            const response = {
                relayResult: undefined,
                latency: 0,
                backoff: false,
                err: undefined,
            };
            if (relayRequest == undefined) {
                response.err = new Error("relayRequest is empty");
                return response;
            }
            const relaySession = relayRequest.getRelaySession();
            if (relaySession == undefined) {
                response.err = new Error("empty relay session");
                return response;
            }
            const relayData = relayRequest.getRelayData();
            if (relayData == undefined) {
                response.err = new Error("empty relay data");
                return response;
            }
            const providerPublicAddress = relayResult.providerAddress;
            const relayResponse = yield this.sendRelayProviderInSession(singleConsumerSession, relayResult, relayTimeout);
            if (relayResponse.err != undefined) {
                return relayResponse;
            }
            if (relayResponse.relayResult == undefined) {
                relayResponse.err = new Error("empty relayResult");
                return relayResponse;
            }
            relayResult = relayResponse.relayResult;
            const reply = relayResult.reply;
            if (reply == undefined) {
                relayResponse.err = new Error("empty reply");
                return relayResponse;
            }
            const chainBlockStats = this.chainParser.chainBlockStats();
            (0, request_builder_1.UpdateRequestedBlock)(relayData, reply);
            const finalized = (0, request_builder_1.IsFinalizedBlock)(relayData.getRequestBlock(), reply.getLatestBlock(), chainBlockStats.blockDistanceForFinalizedData);
            relayResult.finalized = finalized;
            const headersHandler = this.chainParser.handleHeaders(reply.getMetadataList(), chainMessage.getApiCollection(), api_collection_pb_1.Header.HeaderType.PASS_REPLY);
            reply.setMetadataList(headersHandler.filteredHeaders);
            const err = (0, request_builder_1.verifyRelayReply)(reply, relayRequest, providerPublicAddress);
            if (err instanceof Error) {
                relayResponse.err = err;
                return relayResponse;
            }
            reply.setMetadataList([
                ...headersHandler.filteredHeaders,
                ...headersHandler.ignoredMetadata,
            ]);
            const existingSessionLatestBlock = singleConsumerSession.latestBlock;
            const dataReliabilityParams = this.chainParser.dataReliabilityParams();
            if (dataReliabilityParams.enabled) {
                const finalizationData = (0, request_builder_1.verifyFinalizationData)(reply, relayRequest, providerPublicAddress, this.consumerAddress, existingSessionLatestBlock, chainBlockStats.blockDistanceForFinalizedData);
                if (finalizationData instanceof Error) {
                    relayResponse.err = finalizationData;
                    return relayResponse;
                }
                if (finalizationData.finalizationConflict != undefined) {
                    // TODO: send a self finalization conflict
                    relayResponse.err = new Error("invalid finalization data");
                    return relayResponse;
                }
                const finalizationConflict = this.finalizationConsensus.updateFinalizedHashes(chainBlockStats.blockDistanceForFinalizedData, providerPublicAddress, finalizationData.finalizedBlocks, relaySession, reply);
                if (finalizationConflict != undefined) {
                    // TODO: send a consensus finalization conflict
                    relayResponse.err = new Error("conflicting finalization data");
                    return relayResponse;
                }
            }
            return relayResponse;
        });
    }
    sendRelayProviderInSession(singleConsumerSession, relayResult, relayTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpointClient = singleConsumerSession.endpoint.client;
            const response = {
                relayResult: undefined,
                latency: 0,
                backoff: false,
                err: undefined,
            };
            if (endpointClient == undefined) {
                response.err = new Error("endpointClient is undefined");
                return response;
            }
            const relayRequest = relayResult.request;
            if (relayRequest == undefined) {
                response.err = new Error("relayRequest is undefined");
                return response;
            }
            const startTime = performance.now();
            try {
                const relayReply = yield this.relayer.sendRelay(endpointClient, relayRequest, relayTimeout);
                if (relayReply instanceof Error) {
                    throw relayReply;
                }
                relayResult.reply = relayReply;
                const measuredLatency = performance.now() - startTime;
                const relayResponse = {
                    backoff: false,
                    latency: measuredLatency,
                    err: undefined,
                    relayResult: relayResult,
                };
                return relayResponse;
            }
            catch (err) {
                let backoff = false;
                let castedError = new Error("caught unexpected error while sending relay");
                if (err instanceof Error) {
                    if (err == errors_1.default.relayTimeout) {
                        // timed out so we need a backoff
                        backoff = true;
                    }
                    castedError = err;
                }
                const measuredLatency = performance.now() - startTime;
                const relayResponse = {
                    backoff: backoff,
                    latency: measuredLatency,
                    err: castedError,
                    relayResult: undefined,
                };
                return relayResponse;
            }
        });
    }
}
exports.RPCConsumerServer = RPCConsumerServer;
class RelayError {
    constructor(address, err) {
        this.providerAddress = address;
        this.err = err;
    }
}
