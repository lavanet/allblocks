"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TendermintRpcChainParser = void 0;
const base_chain_parser_1 = require("../chainlib/base_chain_parser");
const logger_1 = require("../logger/logger");
const common_1 = require("../util/common");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const tendermint_rpc_message_1 = require("./chainproxy/rpcInterfaceMessages/tendermint_rpc_message");
const parser_1 = require("../parser/parser");
const chain_message_1 = require("./chain_message");
const common_2 = require("../common/common");
const Method = ""; // in tendermint all types are empty (in spec)
const jsonrpcVersion = "2.0";
class TendermintRpcChainParser extends base_chain_parser_1.BaseChainParser {
    constructor() {
        super();
        this.apiInterface = base_chain_parser_1.APIInterfaceTendermintRPC;
    }
    parseMsg(options) {
        var _a, _b, _c;
        if (this.isRest(options)) {
            throw logger_1.Logger.fatal("Wrong relay options provided, expected SendRestRelayOptions got SendRelayOptions");
        }
        const apiCont = this.getSupportedApi(options.method, Method);
        const apiCollection = this.getApiCollection({
            addon: apiCont.collectionKey.addon,
            connectionType: Method,
            internalPath: apiCont.collectionKey.internalPath,
        });
        const headerHandler = this.handleHeaders(options.metadata, apiCollection, base_chain_parser_1.HeadersPassSend);
        const [settingHeaderDirective] = this.getParsingByTag(api_collection_pb_1.FUNCTION_TAG.SET_LATEST_IN_METADATA);
        const tendermintrpcMessage = new tendermint_rpc_message_1.TendermintrpcMessage();
        tendermintrpcMessage.initJsonrpcMessage(jsonrpcVersion, String((_a = options.id) !== null && _a !== void 0 ? _a : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)), options.method, options.params);
        tendermintrpcMessage.initBaseMessage({
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
            requestedBlock = parser_1.Parser.parseBlockFromParams(tendermintrpcMessage, blockParser);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`ParseBlockFromParams failed parsing block for chain: ${(_b = this.spec) === null || _b === void 0 ? void 0 : _b.getName()}`, blockParser, requestedBlock);
                requestedBlock = common_2.NOT_APPLICABLE;
            }
        }
        else {
            requestedBlock = tendermintrpcMessage.parseBlock(overwriteRequestedBlock);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`Failed parsing block from an overwrite header for chain: ${(_c = this.spec) === null || _c === void 0 ? void 0 : _c.getName()}, overwriteRequestedBlock: ${overwriteRequestedBlock}`, requestedBlock);
                requestedBlock = common_2.NOT_APPLICABLE;
            }
        }
        // TODO: add extension parsing.
        return new chain_message_1.ParsedMessage(apiCont.api, requestedBlock, tendermintrpcMessage, apiCollection, (0, common_1.generateRPCData)(tendermintrpcMessage));
    }
}
exports.TendermintRpcChainParser = TendermintRpcChainParser;
