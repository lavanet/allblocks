"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestMessage = void 0;
const parser_1 = require("../../../parser/parser");
const common_1 = require("../common");
class RestMessage extends common_1.BaseMessage {
    constructor() {
        super(...arguments);
        this.path = "";
        this.specPath = "";
    }
    initRestMessage(msg, path, specPath) {
        this.msg = msg;
        this.path = path;
        this.specPath = specPath;
    }
    // GetParams will be deprecated after we remove old client
    // Currently needed because of parser.RPCInput interface
    getParams() {
        let parsedMethod;
        const idx = this.path.indexOf("?");
        if (idx === -1) {
            parsedMethod = this.path;
        }
        else {
            parsedMethod = this.path.substring(0, idx);
        }
        const objectSpec = this.specPath.split("/");
        const objectPath = parsedMethod.split("/");
        const parameters = [];
        for (let index = 0; index < objectSpec.length; index++) {
            const element = objectSpec[index];
            if (element.includes("{")) {
                parameters.push(objectPath[index]);
            }
        }
        if (parameters.length === 0) {
            return null;
        }
        return parameters;
    }
    // GetResult will be deprecated after we remove old client
    // Currently needed because of parser.RPCInput interface
    getResult() {
        return "";
    }
    parseBlock(block) {
        return parser_1.Parser.parseDefaultBlockParameter(block);
    }
    updateLatestBlockInMessage(latestBlock, modifyContent) {
        return this.setLatestBlockWithHeader(latestBlock, modifyContent);
    }
}
exports.RestMessage = RestMessage;
