"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestChainParser = void 0;
const base_chain_parser_1 = require("../chainlib/base_chain_parser");
const logger_1 = require("../logger/logger");
const common_1 = require("../common/common");
const parser_1 = require("../parser/parser");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const rest_message_1 = require("./chainproxy/rpcInterfaceMessages/rest_message");
const chain_message_1 = require("./chain_message");
const common_2 = require("../util/common");
class RestChainParser extends base_chain_parser_1.BaseChainParser {
    constructor() {
        super();
        this.apiInterface = base_chain_parser_1.APIInterfaceRest;
    }
    parseMsg(options) {
        var _a, _b;
        if (!this.isRest(options)) {
            throw logger_1.Logger.fatal("Wrong relay options provided, expected SendRestRelayOptions got SendRelayOptions");
        }
        const [apiCont, found] = this.matchSpecApiByName(options.url, options.connectionType);
        if (!found || !apiCont) {
            throw logger_1.Logger.fatal("Rest api not supported", options.url);
        }
        if (!apiCont.api.getEnabled()) {
            throw logger_1.Logger.fatal("API is disabled in spec", options.url);
        }
        const apiCollection = this.getApiCollection({
            addon: apiCont.collectionKey.addon,
            connectionType: options.connectionType,
            internalPath: apiCont.collectionKey.internalPath,
        });
        const headerHandler = this.handleHeaders(options.metadata, apiCollection, base_chain_parser_1.HeadersPassSend);
        const [settingHeaderDirective] = this.getParsingByTag(api_collection_pb_1.FUNCTION_TAG.SET_LATEST_IN_METADATA);
        let restMessage = new rest_message_1.RestMessage();
        restMessage.initBaseMessage({
            headers: headerHandler.filteredHeaders,
            latestBlockHeaderSetter: undefined,
        });
        let data = "";
        if (options.data) {
            data = "?";
            for (const key in options.data) {
                data = data + key + "=" + options.data[key] + "&";
            }
        }
        restMessage.initRestMessage((0, common_2.encodeUtf8)(data), options.url, apiCont.api.getName());
        if (options.connectionType === common_1.HttpMethod.GET) {
            restMessage = new rest_message_1.RestMessage();
            restMessage.initBaseMessage({
                headers: headerHandler.filteredHeaders,
                latestBlockHeaderSetter: settingHeaderDirective,
            });
            restMessage.initRestMessage(undefined, options.url + String(data), apiCont.api.getName());
        }
        let requestedBlock;
        const overwriteRequestedBlock = headerHandler.overwriteRequestedBlock;
        if (overwriteRequestedBlock == "") {
            const blockParser = apiCont.api.getBlockParsing();
            if (!blockParser) {
                throw logger_1.Logger.fatal("BlockParsing is missing");
            }
            requestedBlock = parser_1.Parser.parseBlockFromParams(restMessage, blockParser);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`ParseBlockFromParams failed parsing block for chain: ${(_a = this.spec) === null || _a === void 0 ? void 0 : _a.getName()}`, blockParser, requestedBlock);
                requestedBlock = common_1.NOT_APPLICABLE;
            }
        }
        else {
            requestedBlock = restMessage.parseBlock(overwriteRequestedBlock);
            if (requestedBlock instanceof Error) {
                logger_1.Logger.error(`Failed parsing block from an overwrite header for chain: ${(_b = this.spec) === null || _b === void 0 ? void 0 : _b.getName()}, overwriteRequestedBlock: ${overwriteRequestedBlock}`, requestedBlock);
                requestedBlock = common_1.NOT_APPLICABLE;
            }
        }
        // TODO: add extension parsing.
        return new chain_message_1.ParsedMessage(apiCont.api, requestedBlock, restMessage, apiCollection, data, options.url);
    }
}
exports.RestChainParser = RestChainParser;
