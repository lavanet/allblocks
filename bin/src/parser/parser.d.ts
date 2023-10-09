import { BlockParser } from "../grpc_web_services/lavanet/lava/spec/api_collection_pb";
import { RPCInput } from "./rpcInput";
export declare class Parser {
    static parseDefaultBlockParameter(block: string): number | Error;
    static parseBlockFromParams(rpcInput: RPCInput, blockParser: BlockParser): number | Error;
    static parseFromReply(rpcInput: RPCInput, blockParser: BlockParser): string | Error;
    static parseBlockFromReply(rpcInput: RPCInput, blockParser: BlockParser): number | Error;
    static parseFromReplyAndDecode(rpcInput: RPCInput, resultParser: BlockParser): string | Error;
    static parseDefault(input: string[]): any[];
    static getDataToParse(rpcInput: RPCInput, dataSource: number): any | Error;
    static parseByArg(rpcInput: RPCInput, input: string[], dataSource: number): any[] | Error;
    static parseCanonical(rpcInput: RPCInput, input: string[], dataSource: number): any[] | Error;
    static parseDictionary(rpcInput: RPCInput, input: string[], dataSource: number): any[] | Error;
    static parseDictionaryOrOrdered(rpcInput: RPCInput, input: string[], dataSource: number): any[] | Error;
    protected static parseResponseByEncoding(rawResult: Uint8Array, encoding: string): string | Error;
    protected static parseArrayOfInterfaces(data: any[], propName: string, innerSeparator: string): any[] | null;
    protected static appendInterfaceToInterfaceArrayWithError(value: string): any[] | Error;
    protected static blockAnyToString(block: any): string;
    protected static parse(rpcInput: RPCInput, blockParser: BlockParser, dataSource: number): any[] | null | Error;
}
