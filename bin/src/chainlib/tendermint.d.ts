import { BaseChainParser, SendRelayOptions, SendRestRelayOptions, ChainMessage } from "../chainlib/base_chain_parser";
export declare class TendermintRpcChainParser extends BaseChainParser {
    constructor();
    parseMsg(options: SendRelayOptions | SendRestRelayOptions): ChainMessage;
}