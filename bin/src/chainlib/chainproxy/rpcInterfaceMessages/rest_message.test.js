"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_message_1 = require("./rest_message");
describe("RestMessage", () => {
    it("should return null params", () => {
        const restMessage = new rest_message_1.RestMessage();
        restMessage.initRestMessage(undefined, "blocks/latest", "blocks/latest");
        const params = restMessage.getParams();
        expect(params).toBeNull();
    });
    it("should return empty result", () => {
        const restMessage = new rest_message_1.RestMessage();
        restMessage.initRestMessage(undefined, "blocks/latest", "blocks/latest");
        const result = restMessage.getResult();
        expect(result.length).toBe(0);
    });
});
describe("RestParseBlock", () => {
    const testTable = [
        {
            name: "Default block param",
            input: "latest",
            expected: -2,
        },
        {
            name: "String representation of int64",
            input: "80",
            expected: 80,
        },
        {
            name: "Hex representation of int64",
            input: "0x26D",
            expected: 621,
        },
    ];
    for (const testCase of testTable) {
        it(`should parse ${testCase.name}`, () => {
            const restMessage = new rest_message_1.RestMessage();
            const block = restMessage.parseBlock(testCase.input);
            expect(block).toEqual(testCase.expected);
        });
    }
});
