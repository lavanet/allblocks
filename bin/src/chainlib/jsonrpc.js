"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcChainParser = void 0;
const base_chain_parser_1 = require("../chainlib/base_chain_parser");
const logger_1 = require("../logger/logger");
const common_1 = require("../util/common");
const common_2 = require("../common/common");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const json_rpc_message_1 = require("./chainproxy/rpcInterfaceMessages/json_rpc_message");
const parser_1 = require("../parser/parser");
const chain_message_1 = require("./chain_message");
const jsonrpcVersion = "2.0";
class JsonRpcChainParser extends base_chain_parser_1.BaseChainParser {
    constructor() {
        super();
        this.apiInterface = base_chain_parser_1.APIInterfaceJsonRPC;
    }
    parseMsg(options) {
        var _a, _b, _c;
        if (this.isRest(options)) {
            throw logger_1.Logger.fatal("Wrong relay options provided, expected SendRestRelayOptions got SendRelayOptions");
        }
        const apiCont = this.getSupportedApi(options.method, common_2.HttpMethod.POST);
        const apiCollection = this.getApiCollection({
            addon: apiCont.collectionKey.addon,
            connectionType: common_2.HttpMethod.POST,
            internalPath: apiCont.collectionKey.internalPath,
        });
        const headerHandler = this.handleHeaders(options.metadata, apiCollection, base_chain_parser_1.HeadersPassSend);
        const [settingHeaderDirective] = this.getParsingByTag(api_collection_pb_1.FUNCTION_TAG.SET_LATEST_IN_METADATA);
        const jsonrpcMessage = new json_rpc_message_1.JsonrpcMessage();
        jsonrpcMessage.initJsonrpcMessage(jsonrpcVersion, String((_a = options.id) !== null && _a !== void 0 ? _a : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)), options.method, options.params);
        jsonrpcMessage.initBaseMessage({
            headers: headerHandler.filteredHeaders,
            latestBlockHeaderSetter: settingHeaderDirective,
        });
        const blockParser = apiCont.api.getBlockParsing();
        if (!blockParser) {
            throw logger_1.Logger.fatal("BlockParsing is missing");
        }
        let requestedBlock;
        const overwriteRequestedBlock = headerHandler.overwriteRequestedBlock;
        if (overwriteRequestedBlock === "") {
            requestedBlock = parser_1.Parser.parseBlockFromParams(jsonrpcMessage, blockParser);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`ParseBlockFromParams failed parsing block for chain: ${(_b = this.spec) === null || _b === void 0 ? void 0 : _b.getName()}`, blockParser, requestedBlock);
                requestedBlock = common_2.NOT_APPLICABLE;
            }
        }
        else {
            requestedBlock = jsonrpcMessage.parseBlock(overwriteRequestedBlock);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`Failed parsing block from an overwrite header for chain: ${(_c = this.spec) === null || _c === void 0 ? void 0 : _c.getName()}, overwriteRequestedBlock: ${overwriteRequestedBlock}`, requestedBlock);
                requestedBlock = common_2.NOT_APPLICABLE;
            }
        }
        // TODO: add extension parsing.
        return new chain_message_1.ParsedMessage(apiCont.api, requestedBlock, jsonrpcMessage, apiCollection, (0, common_1.generateRPCData)(jsonrpcMessage));
    }
}
exports.JsonRpcChainParser = JsonRpcChainParser;
