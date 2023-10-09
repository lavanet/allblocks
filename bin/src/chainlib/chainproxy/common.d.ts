import { Metadata } from "../../grpc_web_services/lavanet/lava/pairing/relay_pb";
import { ParseDirective } from "../../grpc_web_services/lavanet/lava/spec/api_collection_pb";
import { UpdatableRPCInput } from "../chain_message";
export interface BaseMessageOptions {
    headers: Metadata[];
    latestBlockHeaderSetter: ParseDirective | undefined;
}
export declare abstract class BaseMessage implements UpdatableRPCInput {
    private headers;
    private latestBlockHeaderSetter;
    initBaseMessage({ headers, latestBlockHeaderSetter, }: BaseMessageOptions): void;
    abstract updateLatestBlockInMessage(latestBlock: number, modifyContent: boolean): boolean;
    appendHeader(metadata: Metadata[]): void;
    setLatestBlockWithHeader(latestBlock: number, modifyContent: boolean): boolean;
    getHeaders(): Metadata[];
}
