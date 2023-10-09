import { BaseChainParser, SendRelayOptions, SendRestRelayOptions } from "../chainlib/base_chain_parser";
import { ParsedMessage } from "./chain_message";
export declare class JsonRpcChainParser extends BaseChainParser {
    constructor();
    parseMsg(options: SendRelayOptions | SendRestRelayOptions): ParsedMessage;
}
