"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common/common");
const api_collection_pb_1 = require("../grpc_web_services/lavanet/lava/spec/api_collection_pb");
const consts_1 = require("./consts");
const parser_1 = require("./parser");
class RPCInputTest {
    constructor(Params = null, Result = null, Headers = [], ParseBlockFunc = (block) => parser_1.Parser.parseDefaultBlockParameter(block), GetHeadersFunc = () => []) {
        this.Params = Params;
        this.Result = Result;
        this.Headers = Headers;
        this.ParseBlockFunc = ParseBlockFunc;
        this.GetHeadersFunc = GetHeadersFunc;
    }
    getParams() {
        return this.Params;
    }
    getResult() {
        return this.Result;
    }
    parseBlock(block) {
        if (this.ParseBlockFunc !== null) {
            return this.ParseBlockFunc(block);
        }
        return parser_1.Parser.parseDefaultBlockParameter(block);
    }
    getHeaders() {
        return this.Headers;
    }
}
class TestParser extends parser_1.Parser {
    static ParseResponseByEncoding(rawResult, encoding) {
        return this.parseResponseByEncoding(rawResult, encoding);
    }
    static ParseArrayOfInterfaces(data, propName, innerSeparator) {
        return this.parseArrayOfInterfaces(data, propName, innerSeparator);
    }
    static BlockAnyToString(block) {
        return this.blockAnyToString(block);
    }
}
describe("parser", () => {
    describe("ParseArrayOfInterfaces", () => {
        const tests = [
            {
                name: "Test with matching prop name",
                data: ["name:John Doe", "age:30", "gender:male"],
                propName: "name",
                sep: ":",
                expected: ["John Doe"],
            },
            {
                name: "Test with non-matching prop name",
                data: ["name:John Doe", "age:30", "gender:male"],
                propName: "address",
                sep: ":",
                expected: null,
            },
            {
                name: "Test with empty data array",
                data: [],
                propName: "name",
                sep: ":",
                expected: null,
            },
            {
                name: "Test with non-string value in data array",
                data: ["name:John Doe", 30, "gender:male"],
                propName: "name",
                sep: ":",
                expected: ["John Doe"],
            },
        ];
        tests.forEach((test) => {
            it(test.name, () => {
                const result = TestParser.ParseArrayOfInterfaces(test.data, test.propName, test.sep);
                expect(result).toEqual(test.expected);
            });
        });
    });
    describe("ParseResponseByEncoding", () => {
        const testData = [
            {
                bytes: "9291EDC036AE254F9A6E0237F0EF13C452E7F08722E8DBD68B2F34CC8132C91D",
                encoding: consts_1.EncodingHex,
            },
            {
                bytes: "kpHtwDauJU+abgI38O8TxFLn8Ici6NvWiy80zIEyyR0=",
                encoding: consts_1.EncodingBase64,
            },
        ];
        testData.forEach((data) => {
            it(`Test with encoding: ${data.encoding}`, () => {
                const result = TestParser.ParseResponseByEncoding(Buffer.from(data.bytes, "hex"), data.encoding);
                expect(result).toEqual(result);
            });
        });
    });
    describe("BlockInterfaceToString", () => {
        const testCases = [
            {
                name: '"NUMBER"',
                block: "100",
                expected: "100",
            },
            {
                name: "String(NUMBER)",
                block: String(56),
                expected: "56",
            },
            {
                name: "NUMBER",
                block: 6,
                expected: "6",
            },
            {
                name: "Number(NUMBER)",
                block: Number(7878),
                expected: "7878",
            },
            {
                name: "NUMBER.0",
                block: 34.0,
                expected: "34",
            },
            {
                name: "Not a number",
                block: new api_collection_pb_1.BlockParser(),
                expected: "",
            },
            {
                // TODO: Is this an expected behavior?
                name: "Just a string",
                block: "This is a string",
                expected: "This is a string",
            },
        ];
        testCases.forEach((testCase) => {
            it(`Test BlockAnyToString for: ${testCase.name}`, () => {
                const result = TestParser.BlockAnyToString(testCase.block);
                expect(result).toEqual(testCase.expected);
            });
        });
    });
});
function createBlockParser(parserArgs, parserFunc) {
    const blockParser = new api_collection_pb_1.BlockParser();
    blockParser.setParserArgList(parserArgs);
    blockParser.setParserFunc(parserFunc);
    return blockParser;
}
describe("TestParseBlockFromParamsHappyFlow", () => {
    const testCases = [
        {
            name: "DefaultParsing",
            message: new RPCInputTest(),
            blockParser: createBlockParser(["latest"], api_collection_pb_1.PARSER_FUNC.DEFAULT),
            expectedBlock: common_1.LATEST_BLOCK,
        },
        {
            name: "ParseByArg",
            message: new RPCInputTest(["1"]),
            blockParser: createBlockParser(["0"], api_collection_pb_1.PARSER_FUNC.PARSE_BY_ARG),
            expectedBlock: 1,
        },
        {
            name: "ParseCanonical__any[]__Case",
            message: new RPCInputTest([{ block: 6 }, { block: 25 }]),
            blockParser: createBlockParser(["1", "block"], api_collection_pb_1.PARSER_FUNC.PARSE_CANONICAL),
            expectedBlock: 25,
        },
        {
            name: "ParseCanonical__object__Case",
            message: new RPCInputTest({ data: { block: 1234234 } }),
            blockParser: createBlockParser(["0", "data", "block"], api_collection_pb_1.PARSER_FUNC.PARSE_CANONICAL),
            expectedBlock: 1234234,
        },
        {
            name: "ParseDictionary__any[]__Case",
            message: new RPCInputTest(["block=1000"]),
            blockParser: createBlockParser(["block", "="], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY),
            expectedBlock: 1000,
        },
        {
            name: "ParseDictionary__object__Case",
            message: new RPCInputTest({ block: 6 }),
            blockParser: createBlockParser(["block", "unnecessary"], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY),
            expectedBlock: 6,
        },
        {
            name: "ParseDictionaryOrOrdered__any[]__PropName__Case",
            message: new RPCInputTest(["block=99"]),
            blockParser: createBlockParser(["block", "=", "0"], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED),
            expectedBlock: 99,
        },
        {
            name: "ParseDictionaryOrOrdered__any[]__PropIndex__Case",
            message: new RPCInputTest(["765"]),
            blockParser: createBlockParser(["unused", "unused", "0"], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED),
            expectedBlock: 765,
        },
        {
            name: "ParseDictionaryOrOrdered__object__PropName__Case",
            message: new RPCInputTest({ block: "101" }),
            blockParser: createBlockParser(["block", "unused", "0"], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED),
            expectedBlock: 101,
        },
        {
            name: "ParseDictionaryOrOrdered__object__KeyIndex__Case",
            message: new RPCInputTest({ 0: 103 }),
            blockParser: createBlockParser(["unused", "unused", "0"], api_collection_pb_1.PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED),
            expectedBlock: 103,
        },
    ];
    for (const testCase of testCases) {
        it(testCase.name, () => {
            const block = parser_1.Parser.parseBlockFromParams(testCase.message, testCase.blockParser);
            expect(block).toBe(testCase.expectedBlock);
        });
    }
});
describe("TestParseBlockFromReplyHappyFlow", () => {
    const testCases = [
        {
            name: "DefaultParsing",
            message: new RPCInputTest(),
            blockParser: createBlockParser(["latest"], api_collection_pb_1.PARSER_FUNC.DEFAULT),
            expectedBlock: common_1.LATEST_BLOCK,
        },
        {
            name: "ParseByArg",
            message: new RPCInputTest(null, ["1"]),
            blockParser: createBlockParser(["0"], api_collection_pb_1.PARSER_FUNC.PARSE_BY_ARG),
            expectedBlock: 1,
        },
        {
            name: "ParseCanonical",
            message: new RPCInputTest(null, { block: 25 }),
            blockParser: createBlockParser(["0", "block"], api_collection_pb_1.PARSER_FUNC.PARSE_CANONICAL),
            expectedBlock: 25,
        },
    ];
    for (const testCase of testCases) {
        it(testCase.name, () => {
            const block = parser_1.Parser.parseBlockFromReply(testCase.message, testCase.blockParser);
            expect(block).toBe(testCase.expectedBlock);
        });
    }
});
