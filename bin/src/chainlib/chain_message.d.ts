import { Metadata } from "../grpc_web_services/lavanet/lava/pairing/relay_pb";
import { Api, ApiCollection, Extension } from "../grpc_web_services/lavanet/lava/spec/api_collection_pb";
import { GenericMessage } from "./chainproxy/rpcInterfaceMessages/common";
interface RawRequestData {
    url: string;
    data: string;
}
export interface UpdatableRPCInput extends GenericMessage {
    updateLatestBlockInMessage(latestBlock: number, modifyContent: boolean): boolean;
    appendHeader(metadata: Metadata[]): void;
}
export declare class ParsedMessage {
    private api;
    private requestedBlock;
    private msg;
    private apiCollection;
    private extensions;
    private messageUrl;
    private messageData;
    constructor(api: Api, requestedBlock: number, msg: UpdatableRPCInput, apiCollection: ApiCollection, messageData: string, messageUrl?: string, extensions?: Extension[]);
    getRawRequestData(): RawRequestData;
    appendHeader(metadata: Metadata[]): void;
    getApi(): Api;
    getApiCollection(): ApiCollection;
    getRequestedBlock(): number;
    getRPCMessage(): GenericMessage;
    updateLatestBlockInMessage(latestBlock: number, modifyContent: boolean): boolean;
    getExtensions(): Extension[];
    setExtension(extension: Extension): void;
}
export {};
