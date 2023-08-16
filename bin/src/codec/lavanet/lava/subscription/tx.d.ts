import Long from "long";
import _m0 from "protobufjs/minimal";
import { ProjectData } from "../projects/project";
export declare const protobufPackage = "lavanet.lava.subscription";
export interface MsgBuy {
    creator: string;
    consumer: string;
    index: string;
    /** in months */
    duration: Long;
}
export interface MsgBuyResponse {
}
export interface MsgAddProject {
    creator: string;
    projectData?: ProjectData;
}
export interface MsgAddProjectResponse {
}
export interface MsgDelProject {
    creator: string;
    name: string;
}
export interface MsgDelProjectResponse {
}
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    create<I extends {
        creator?: string | undefined;
        consumer?: string | undefined;
        index?: string | undefined;
        duration?: string | number | Long | undefined;
    } & {
        creator?: string | undefined;
        consumer?: string | undefined;
        index?: string | undefined;
        duration?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["duration"], keyof Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgBuy>]: never; }>(base?: I | undefined): MsgBuy;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        consumer?: string | undefined;
        index?: string | undefined;
        duration?: string | number | Long | undefined;
    } & {
        creator?: string | undefined;
        consumer?: string | undefined;
        index?: string | undefined;
        duration?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_2 in Exclude<keyof I_1["duration"], keyof Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MsgBuy>]: never; }>(object: I_1): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgBuyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgBuyResponse;
};
export declare const MsgAddProject: {
    encode(message: MsgAddProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProject;
    fromJSON(object: any): MsgAddProject;
    toJSON(message: MsgAddProject): unknown;
    create<I extends {
        creator?: string | undefined;
        projectData?: {
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: {
                key?: string | undefined;
                kinds?: number | undefined;
            }[] | undefined;
            policy?: {
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        creator?: string | undefined;
        projectData?: ({
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: {
                key?: string | undefined;
                kinds?: number | undefined;
            }[] | undefined;
            policy?: {
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: ({
                key?: string | undefined;
                kinds?: number | undefined;
            }[] & ({
                key?: string | undefined;
                kinds?: number | undefined;
            } & {
                key?: string | undefined;
                kinds?: number | undefined;
            } & { [K in Exclude<keyof I["projectData"]["projectKeys"][number], keyof import("../projects/project").ProjectKey>]: never; })[] & { [K_1 in Exclude<keyof I["projectData"]["projectKeys"], keyof {
                key?: string | undefined;
                kinds?: number | undefined;
            }[]>]: never; }) | undefined;
            policy?: ({
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } & {
                chainPolicies?: ({
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] & ({
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                } & {
                    chainId?: string | undefined;
                    apis?: (string[] & string[] & { [K_2 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
                    requirements?: ({
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] & ({
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    } & {
                        collection?: ({
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } & {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } & { [K_3 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                        extensions?: (string[] & string[] & { [K_4 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_6 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number]["requirements"], keyof {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_8 in Exclude<keyof I["projectData"]["policy"]["chainPolicies"], keyof {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                geolocationProfile?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_9 in Exclude<keyof I["projectData"]["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
                totalCuLimit?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_10 in Exclude<keyof I["projectData"]["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
                epochCuLimit?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_11 in Exclude<keyof I["projectData"]["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
                maxProvidersToPair?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_12 in Exclude<keyof I["projectData"]["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: (string[] & string[] & { [K_13 in Exclude<keyof I["projectData"]["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["projectData"]["policy"], keyof import("../plans/policy").Policy>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["projectData"], keyof ProjectData>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof MsgAddProject>]: never; }>(base?: I | undefined): MsgAddProject;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        projectData?: {
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: {
                key?: string | undefined;
                kinds?: number | undefined;
            }[] | undefined;
            policy?: {
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        creator?: string | undefined;
        projectData?: ({
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: {
                key?: string | undefined;
                kinds?: number | undefined;
            }[] | undefined;
            policy?: {
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            enabled?: boolean | undefined;
            projectKeys?: ({
                key?: string | undefined;
                kinds?: number | undefined;
            }[] & ({
                key?: string | undefined;
                kinds?: number | undefined;
            } & {
                key?: string | undefined;
                kinds?: number | undefined;
            } & { [K_17 in Exclude<keyof I_1["projectData"]["projectKeys"][number], keyof import("../projects/project").ProjectKey>]: never; })[] & { [K_18 in Exclude<keyof I_1["projectData"]["projectKeys"], keyof {
                key?: string | undefined;
                kinds?: number | undefined;
            }[]>]: never; }) | undefined;
            policy?: ({
                chainPolicies?: {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                geolocationProfile?: string | number | Long | undefined;
                totalCuLimit?: string | number | Long | undefined;
                epochCuLimit?: string | number | Long | undefined;
                maxProvidersToPair?: string | number | Long | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: string[] | undefined;
            } & {
                chainPolicies?: ({
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[] & ({
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                } & {
                    chainId?: string | undefined;
                    apis?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
                    requirements?: ({
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] & ({
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    } & {
                        collection?: ({
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } & {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } & { [K_20 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                        extensions?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                    } & { [K_22 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_23 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number]["requirements"], keyof {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_24 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_25 in Exclude<keyof I_1["projectData"]["policy"]["chainPolicies"], keyof {
                    chainId?: string | undefined;
                    apis?: string[] | undefined;
                    requirements?: {
                        collection?: {
                            apiInterface?: string | undefined;
                            internalPath?: string | undefined;
                            type?: string | undefined;
                            addOn?: string | undefined;
                        } | undefined;
                        extensions?: string[] | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                geolocationProfile?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_26 in Exclude<keyof I_1["projectData"]["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
                totalCuLimit?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_27 in Exclude<keyof I_1["projectData"]["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
                epochCuLimit?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_28 in Exclude<keyof I_1["projectData"]["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
                maxProvidersToPair?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_29 in Exclude<keyof I_1["projectData"]["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
                selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
                selectedProviders?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["projectData"]["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I_1["projectData"]["policy"], keyof import("../plans/policy").Policy>]: never; }) | undefined;
        } & { [K_32 in Exclude<keyof I_1["projectData"], keyof ProjectData>]: never; }) | undefined;
    } & { [K_33 in Exclude<keyof I_1, keyof MsgAddProject>]: never; }>(object: I_1): MsgAddProject;
};
export declare const MsgAddProjectResponse: {
    encode(_: MsgAddProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProjectResponse;
    fromJSON(_: any): MsgAddProjectResponse;
    toJSON(_: MsgAddProjectResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgAddProjectResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgAddProjectResponse;
};
export declare const MsgDelProject: {
    encode(message: MsgDelProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelProject;
    fromJSON(object: any): MsgDelProject;
    toJSON(message: MsgDelProject): unknown;
    create<I extends {
        creator?: string | undefined;
        name?: string | undefined;
    } & {
        creator?: string | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDelProject>]: never; }>(base?: I | undefined): MsgDelProject;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        name?: string | undefined;
    } & {
        creator?: string | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDelProject>]: never; }>(object: I_1): MsgDelProject;
};
export declare const MsgDelProjectResponse: {
    encode(_: MsgDelProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelProjectResponse;
    fromJSON(_: any): MsgDelProjectResponse;
    toJSON(_: MsgDelProjectResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgDelProjectResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDelProjectResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    AddProject(request: MsgAddProject): Promise<MsgAddProjectResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DelProject(request: MsgDelProject): Promise<MsgDelProjectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    AddProject(request: MsgAddProject): Promise<MsgAddProjectResponse>;
    DelProject(request: MsgDelProject): Promise<MsgDelProjectResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
