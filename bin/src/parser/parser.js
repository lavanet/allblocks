"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const common_1 = require("../common/common");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const common_2 = require("../util/common");
const consts_1 = require("./consts");
const errors_1 = require("./errors");
class Parser {
    static parseDefaultBlockParameter(block) {
        switch (block) {
            case "latest":
                return common_1.LATEST_BLOCK;
            case "earliest":
                return common_1.EARLIEST_BLOCK;
            case "pending":
                return common_1.PENDING_BLOCK;
            case "safe":
                return common_1.SAFE_BLOCK;
            case "finalized":
                return common_1.FINALIZED_BLOCK;
            default:
                // try to parse a number
                const blockNum = parseInt(block, 0);
                if (isNaN(blockNum) || blockNum < 0) {
                    return new errors_1.InvalidBlockValue(block);
                }
                return blockNum;
        }
    }
    static parseBlockFromParams(rpcInput, blockParser) {
        const result = this.parse(rpcInput, blockParser, consts_1.PARSE_PARAMS);
        if (result instanceof Error) {
            return result;
        }
        const resString = result[0];
        return rpcInput.parseBlock(resString);
    }
    static parseFromReply(rpcInput, blockParser) {
        const result = this.parse(rpcInput, blockParser, consts_1.PARSE_RESULT);
        if (result instanceof Error) {
            return result;
        }
        let response = result[common_1.DEFAULT_PARSED_RESULT_INDEX];
        if (response.includes('"')) {
            response = JSON.parse(response);
        }
        return response;
    }
    static parseBlockFromReply(rpcInput, blockParser) {
        const result = this.parseFromReply(rpcInput, blockParser);
        if (result instanceof Error) {
            return result;
        }
        return rpcInput.parseBlock(result);
    }
    static parseFromReplyAndDecode(rpcInput, resultParser) {
        const result = this.parseFromReply(rpcInput, resultParser);
        if (result instanceof Error) {
            return result;
        }
        return this.parseResponseByEncoding((0, common_2.encodeUtf8)(result), resultParser.getEncoding());
    }
    static parseDefault(input) {
        return [input[0]];
    }
    static getDataToParse(rpcInput, dataSource) {
        switch (dataSource) {
            case consts_1.PARSE_PARAMS:
                return rpcInput.getParams();
            case consts_1.PARSE_RESULT:
                let data;
                const rawJsonString = rpcInput.getResult();
                if (rawJsonString.length === 0) {
                    return new Error("GetDataToParse failure GetResult is empty");
                }
                // Try to unmarshal, and if the data is unmarshalable, then return the data itself
                try {
                    data = JSON.parse(rawJsonString);
                    return [data];
                }
                catch (err) {
                    return [rawJsonString];
                }
            default:
                return new Error("unsupported block parser parserFunc");
        }
    }
    static parseByArg(rpcInput, input, dataSource) {
        // specified block is one of the direct parameters, input should be one string defining the location of the block
        if (input.length !== 1) {
            return new errors_1.InvalidInputFormat(`input length: ${input.length}`);
        }
        const inp = input[0];
        const param_index = parseInt(inp, 10);
        if (isNaN(param_index)) {
            return new errors_1.InvalidInputFormat(`input isn't an unsigned index: ${inp}`);
        }
        const unmarshalledData = this.getDataToParse(rpcInput, dataSource);
        if (unmarshalledData instanceof Error) {
            return new errors_1.InvalidInputFormat(`data is not json: ${unmarshalledData.message}`);
        }
        if (Array.isArray(unmarshalledData)) {
            if (param_index >= unmarshalledData.length) {
                return new errors_1.ValueNotSetError();
            }
            const block = unmarshalledData[param_index];
            return [this.blockAnyToString(block)];
        }
        else {
            return new Error("Parse type unsupported in parse by arg, only list parameters are currently supported");
        }
    }
    // expect input to be keys[a,b,c] and a canonical object such as
    //
    //	{
    //	  "a": {
    //	      "b": {
    //	         "c": "wanted result"
    //	       }
    //	   }
    //	}
    //
    // should output an `any` array with "wanted result" in first index 0
    static parseCanonical(rpcInput, input, dataSource) {
        const inp = input[0];
        const param_index = parseInt(inp, 10);
        if (isNaN(param_index)) {
            return new Error(`invalid input format, input isn't an unsigned index: ${inp}`);
        }
        let unmarshalledData = this.getDataToParse(rpcInput, dataSource);
        if (unmarshalledData instanceof Error) {
            return new Error(`invalid input format, data is not json: ${unmarshalledData.message}`);
        }
        if (Array.isArray(unmarshalledData)) {
            if (param_index >= unmarshalledData.length) {
                return new errors_1.ValueNotSetError();
            }
            let blockContainer = unmarshalledData[param_index];
            for (let i = 1; i < input.length; i++) {
                if (typeof blockContainer === "object" && blockContainer !== null) {
                    const key = input[i];
                    if (blockContainer.hasOwnProperty(key)) {
                        blockContainer = blockContainer[key];
                    }
                    else {
                        return new Error(`invalid input format, blockContainer does not have field inside: ${key}`);
                    }
                }
                else {
                    return new Error(`invalid parser input format, blockContainer is ${typeof blockContainer} and not an object`);
                }
            }
            return [this.blockAnyToString(blockContainer)];
        }
        else if (unmarshalledData !== null &&
            typeof unmarshalledData === "object") {
            for (let i = 1; i < input.length; i++) {
                const key = input[i];
                if (unmarshalledData.hasOwnProperty(key)) {
                    const val = unmarshalledData[key];
                    if (i === input.length - 1) {
                        return [this.blockAnyToString(val)];
                    }
                    else if (typeof val === "object" && val !== null) {
                        unmarshalledData = val;
                    }
                    else {
                        return new Error(`failed to parse, ${key} is not of type object`);
                    }
                }
                else {
                    return new errors_1.ValueNotSetError();
                }
            }
        }
        return new Error(`ParseCanonical not supported with other types ${typeof unmarshalledData}`);
    }
    static parseDictionary(rpcInput, input, dataSource) {
        // Validate number of arguments
        // The number of arguments should be 2
        // [prop_name,separator]
        if (input.length !== 2) {
            return new Error(`invalid input format, input length: ${input.length} and needs to be 2`);
        }
        const unmarshalledData = this.getDataToParse(rpcInput, dataSource);
        if (unmarshalledData instanceof Error) {
            return new Error(`invalid input format, data is not json: ${unmarshalledData.message}`);
        }
        const propName = input[0];
        const innerSeparator = input[1];
        if (Array.isArray(unmarshalledData)) {
            const value = this.parseArrayOfInterfaces(unmarshalledData, propName, innerSeparator);
            if (value !== null) {
                return value;
            }
            return new errors_1.ValueNotSetError();
        }
        else if (unmarshalledData !== null &&
            typeof unmarshalledData === "object") {
            if (unmarshalledData.hasOwnProperty(propName)) {
                return this.appendInterfaceToInterfaceArrayWithError(this.blockAnyToString(unmarshalledData[propName]));
            }
            return new errors_1.ValueNotSetError();
        }
        return new Error(`ParseDictionary not supported with other types: ${typeof unmarshalledData}`);
    }
    static parseDictionaryOrOrdered(rpcInput, input, dataSource) {
        // Validate number of arguments
        // The number of arguments should be 3
        // [prop_name,separator,parameter order if not found]
        if (input.length !== 3) {
            return new Error(`ParseDictionaryOrOrdered: invalid input format, input length: ${input.length} and needs to be 3: ${input.join(",")}`);
        }
        const unmarshalledData = this.getDataToParse(rpcInput, dataSource);
        if (unmarshalledData instanceof Error) {
            return new Error(`invalid input format, data is not json: ${unmarshalledData.message}`);
        }
        const propName = input[0];
        const innerSeparator = input[1];
        const inp = input[2];
        // Convert prop index to the uint
        const propIndex = parseInt(inp, 10);
        if (isNaN(propIndex)) {
            return new Error(`invalid input format, input isn't an unsigned index: ${inp}`);
        }
        if (Array.isArray(unmarshalledData)) {
            const value = this.parseArrayOfInterfaces(unmarshalledData, propName, innerSeparator);
            if (value !== null) {
                return value;
            }
            if (propIndex >= unmarshalledData.length) {
                return new errors_1.ValueNotSetError();
            }
            return this.appendInterfaceToInterfaceArrayWithError(this.blockAnyToString(unmarshalledData[propIndex]));
        }
        else if (unmarshalledData !== null &&
            typeof unmarshalledData === "object") {
            if (unmarshalledData.hasOwnProperty(propName)) {
                return this.appendInterfaceToInterfaceArrayWithError(this.blockAnyToString(unmarshalledData[propName]));
            }
            if (unmarshalledData.hasOwnProperty(inp)) {
                return this.appendInterfaceToInterfaceArrayWithError(this.blockAnyToString(unmarshalledData[inp]));
            }
            return new errors_1.ValueNotSetError();
        }
        return new Error(`ParseDictionaryOrOrdered not supported with other types: ${typeof unmarshalledData}`);
    }
    static parseResponseByEncoding(rawResult, encoding) {
        switch (encoding) {
            case consts_1.EncodingBase64:
                return Buffer.from(rawResult).toString();
            case consts_1.EncodingHex:
                let hexString = Buffer.from(rawResult).toString("hex");
                if (hexString.length % 2 !== 0) {
                    hexString = "0" + hexString;
                }
                try {
                    const hexBytes = Buffer.from(hexString, "hex");
                    const base64String = hexBytes.toString("base64");
                    return base64String;
                }
                catch (error) {
                    return new Error(`Tried decoding a hex response in parseResponseByEncoding but failed: ${error}`);
                }
            default:
                return Buffer.from(rawResult).toString();
        }
    }
    // parseArrayOfInterfaces returns value of item with specified prop name
    // If it doesn't exist return null
    static parseArrayOfInterfaces(data, propName, innerSeparator) {
        for (const val of data) {
            if ((0, common_1.IsString)(val)) {
                const valueArr = val.split(innerSeparator, 2);
                if (valueArr[0] !== propName || valueArr.length < 2) {
                    continue;
                }
                else {
                    return [valueArr[1]];
                }
            }
        }
        return null;
    }
    // AppendInterfaceToInterfaceArrayWithError appends an `any` to an array of `any`s
    // Returns an error if the value is an empty string
    static appendInterfaceToInterfaceArrayWithError(value) {
        if (value === "" || value === "0") {
            return new errors_1.ValueNotSetError();
        }
        return [value];
    }
    static blockAnyToString(block) {
        if ((0, common_1.IsString)(block)) {
            return block;
        }
        else if ((0, common_1.IsNumber)(block)) {
            if (Number.isInteger(block)) {
                // Check if it's an integer
                return block.toString();
            }
            else {
                // Assuming it's a floating-point number
                return block.toFixed();
            }
        }
        else {
            return String(block);
        }
    }
    static parse(rpcInput, blockParser, dataSource) {
        let retval = [];
        const parserFunc = blockParser.getParserFunc();
        switch (parserFunc) {
            case api_collection_pb_1.PARSER_FUNC.EMPTY:
                return null;
            case api_collection_pb_1.PARSER_FUNC.PARSE_BY_ARG:
                retval = this.parseByArg(rpcInput, blockParser.getParserArgList(), dataSource);
                break;
            case api_collection_pb_1.PARSER_FUNC.PARSE_CANONICAL:
                retval = this.parseCanonical(rpcInput, blockParser.getParserArgList(), dataSource);
                break;
            case api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY:
                retval = this.parseDictionary(rpcInput, blockParser.getParserArgList(), dataSource);
                break;
            case api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED:
                retval = this.parseDictionaryOrOrdered(rpcInput, blockParser.getParserArgList(), dataSource);
                break;
            case api_collection_pb_1.PARSER_FUNC.DEFAULT:
                retval = this.parseDefault(blockParser.getParserArgList());
                break;
            default:
                return new errors_1.UnsupportedBlockParser(parserFunc);
        }
        if (retval instanceof errors_1.ValueNotSetError &&
            blockParser.getDefaultValue() !== "") {
            // means this parsing failed because the value did not exist on an optional param
            return [blockParser.getDefaultValue()];
        }
        return retval;
    }
}
exports.Parser = Parser;
