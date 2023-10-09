"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputFormat = exports.UnsupportedBlockParser = exports.InvalidBlockValue = exports.ValueNotSetError = void 0;
class ValueNotSetError extends Error {
    constructor() {
        super("When trying to parse, the value that we attempted to parse did not exist");
    }
}
exports.ValueNotSetError = ValueNotSetError;
class InvalidBlockValue extends Error {
    constructor(block) {
        super(`Invalid block value: ${block}`);
    }
}
exports.InvalidBlockValue = InvalidBlockValue;
class UnsupportedBlockParser extends Error {
    constructor(blockParser) {
        super(`Unsupported block parser: ${blockParser}`);
    }
}
exports.UnsupportedBlockParser = UnsupportedBlockParser;
class InvalidInputFormat extends Error {
    constructor(message) {
        super(`Invalid input format: ${message}`);
    }
}
exports.InvalidInputFormat = InvalidInputFormat;
