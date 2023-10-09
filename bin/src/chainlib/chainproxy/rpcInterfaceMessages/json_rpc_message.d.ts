import { RPCInput } from "../../../parser/rpcInput";
import { BaseMessage } from "../common";
export interface JsonError {
    code: number;
    message: string;
    data: any;
}
export declare class JsonrpcMessage extends BaseMessage implements RPCInput {
    version: string;
    id: string | undefined;
    method: string;
    params: any;
    error: JsonError | undefined;
    result: string | undefined;
    initJsonrpcMessage(version: string, id: string, method: string, params: any, error?: JsonError, result?: string): void;
    getParams(): any;
    getResult(): string;
    parseBlock(block: string): number | Error;
    updateLatestBlockInMessage(latestBlock: number, modifyContent: boolean): boolean;
}
export declare function parseJsonRPCMsg(data: Uint8Array): JsonrpcMessage[] | Error;
