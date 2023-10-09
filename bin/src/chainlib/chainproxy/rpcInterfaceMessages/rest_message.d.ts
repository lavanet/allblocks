import { RPCInput } from "../../../parser/rpcInput";
import { BaseMessage } from "../common";
export declare class RestMessage extends BaseMessage implements RPCInput {
    msg: Uint8Array | undefined;
    private path;
    private specPath;
    initRestMessage(msg: Uint8Array | undefined, path: string, specPath: string): void;
    getParams(): any;
    getResult(): string;
    parseBlock(block: string): number | Error;
    updateLatestBlockInMessage(latestBlock: number, modifyContent: boolean): boolean;
}
