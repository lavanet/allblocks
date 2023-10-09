/// <reference types="long" />
import { JsonrpcMessage } from "../chainlib/chainproxy/rpcInterfaceMessages/json_rpc_message";
export declare function base64ToUint8Array(str: string): Uint8Array;
export declare function generateRPCData(rpcMessage: JsonrpcMessage): string;
export declare function parseLong(long: Long): number;
export declare function debugPrint(debugMode: boolean, message?: any, ...optionalParams: any[]): void;
export declare function generateRandomInt(): number;
export declare function sleep(ms: number): Promise<void>;
export declare function median(values: number[]): number;
export declare function encodeUtf8(str: string): Uint8Array;
export declare function byteArrayToString(byteArray: Uint8Array, replaceDoubleQuotes?: boolean): string;
export declare function promiseAny<T>(promises: PromiseLike<T>[]): Promise<T>;
