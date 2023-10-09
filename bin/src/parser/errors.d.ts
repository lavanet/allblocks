export declare class ValueNotSetError extends Error {
    constructor();
}
export declare class InvalidBlockValue extends Error {
    constructor(block: string);
}
export declare class UnsupportedBlockParser extends Error {
    constructor(blockParser: string);
}
export declare class InvalidInputFormat extends Error {
    constructor(message: string);
}
