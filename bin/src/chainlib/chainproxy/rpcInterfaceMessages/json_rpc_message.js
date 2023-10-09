"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonRPCMsg = exports.JsonrpcMessage = void 0;
const logger_1 = require("../../../logger/logger");
const parser_1 = require("../../../parser/parser");
const common_1 = require("../../../util/common");
const common_2 = require("../common");
class JsonrpcMessage extends common_2.BaseMessage {
    constructor() {
        super(...arguments);
        this.version = "";
        this.method = "";
    }
    initJsonrpcMessage(version, id, method, params, error, result) {
        this.version = version;
        this.id = id;
        this.method = method;
        this.params = params;
        this.error = error;
        this.result = result;
    }
    getParams() {
        return this.params;
    }
    getResult() {
        var _a;
        if (this.error) {
            logger_1.Logger.warn(`GetResult() Request got an error from the node. error: ${this.error}`);
        }
        return (_a = this.result) !== null && _a !== void 0 ? _a : "Failed getting result";
    }
    parseBlock(block) {
        return parser_1.Parser.parseDefaultBlockParameter(block);
    }
    updateLatestBlockInMessage(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    latestBlock, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifyContent) {
        return false;
    }
}
exports.JsonrpcMessage = JsonrpcMessage;
function parseJsonRPCMsg(data) {
    var _a, _b;
    // Currently unused
    const msgs = [];
    let rawJsonObjs;
    const dataAsString = (0, common_1.byteArrayToString)(data);
    try {
        const rawJsonObj = JSON.parse(dataAsString);
        if (Array.isArray(rawJsonObj)) {
            rawJsonObjs = rawJsonObj;
        }
        else {
            rawJsonObjs = [rawJsonObj];
        }
    }
    catch (err) {
        return err;
    }
    for (let index = 0; index < rawJsonObjs.length; index++) {
        const rawJsonObj = rawJsonObjs[index];
        const err = validateRawJsonrpcMessage(rawJsonObj);
        if (err) {
            return err;
        }
        const msg = new JsonrpcMessage();
        msg.initJsonrpcMessage((_a = rawJsonObj.jsonrpc) !== null && _a !== void 0 ? _a : "", rawJsonObj.id, (_b = rawJsonObj.method) !== null && _b !== void 0 ? _b : "", rawJsonObj.params, undefined, JSON.stringify(rawJsonObj.result));
        msgs.push(msg);
    }
    return msgs;
}
exports.parseJsonRPCMsg = parseJsonRPCMsg;
function validateRawJsonrpcMessage(rawJsonObj) {
    if (!rawJsonObj.jsonrpc) {
        return new Error("Missing jsonrpc field from json");
    }
    if (!rawJsonObj.id) {
        return new Error("Missing id field from json");
    }
    if (!rawJsonObj.method) {
        return new Error("Missing method field from json");
    }
    if (!rawJsonObj.params) {
        return new Error("Missing params field from json");
    }
}
