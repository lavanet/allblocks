import Long from "long";
import _m0 from "protobufjs/minimal";
import { CollectionData } from "../spec/api_collection";
export declare const protobufPackage = "lavanet.lava.plans";
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
export declare enum selectedProvidersMode {
    /** ALLOWED - no providers restrictions */
    ALLOWED = 0,
    /** MIXED - use the selected providers mixed with randomly chosen providers */
    MIXED = 1,
    /** EXCLUSIVE - use only the selected providers */
    EXCLUSIVE = 2,
    /** DISABLED - selected providers feature is disabled */
    DISABLED = 3,
    UNRECOGNIZED = -1
}
export declare function selectedProvidersModeFromJSON(object: any): selectedProvidersMode;
export declare function selectedProvidersModeToJSON(object: selectedProvidersMode): string;
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
    chainPolicies: ChainPolicy[];
    geolocationProfile: Long;
    totalCuLimit: Long;
    epochCuLimit: Long;
    maxProvidersToPair: Long;
    selectedProvidersMode: selectedProvidersMode;
    selectedProviders: string[];
}
export interface ChainPolicy {
    chainId: string;
    apis: string[];
    requirements: ChainRequirement[];
}
export interface ChainRequirement {
    collection?: CollectionData;
    extensions: string[];
}
export declare const Policy: {
    encode(message: Policy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Policy;
    fromJSON(object: any): Policy;
    toJSON(message: Policy): unknown;
    create<I extends {
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
        selectedProvidersMode?: selectedProvidersMode | undefined;
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
            apis?: (string[] & string[] & { [K in Exclude<keyof I["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["chainPolicies"][number]["requirements"][number]["collection"], keyof CollectionData>]: never; }) | undefined;
                extensions?: (string[] & string[] & { [K_2 in Exclude<keyof I["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["chainPolicies"][number]["requirements"][number], keyof ChainRequirement>]: never; })[] & { [K_4 in Exclude<keyof I["chainPolicies"][number]["requirements"], keyof {
                collection?: {
                    apiInterface?: string | undefined;
                    internalPath?: string | undefined;
                    type?: string | undefined;
                    addOn?: string | undefined;
                } | undefined;
                extensions?: string[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["chainPolicies"][number], keyof ChainPolicy>]: never; })[] & { [K_6 in Exclude<keyof I["chainPolicies"], keyof {
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
        } & { [K_7 in Exclude<keyof I["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
        } & { [K_8 in Exclude<keyof I["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
        } & { [K_9 in Exclude<keyof I["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
        } & { [K_10 in Exclude<keyof I["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
        selectedProvidersMode?: selectedProvidersMode | undefined;
        selectedProviders?: (string[] & string[] & { [K_11 in Exclude<keyof I["selectedProviders"], keyof string[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof Policy>]: never; }>(base?: I | undefined): Policy;
    fromPartial<I_1 extends {
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
        selectedProvidersMode?: selectedProvidersMode | undefined;
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
            apis?: (string[] & string[] & { [K_13 in Exclude<keyof I_1["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_14 in Exclude<keyof I_1["chainPolicies"][number]["requirements"][number]["collection"], keyof CollectionData>]: never; }) | undefined;
                extensions?: (string[] & string[] & { [K_15 in Exclude<keyof I_1["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["chainPolicies"][number]["requirements"][number], keyof ChainRequirement>]: never; })[] & { [K_17 in Exclude<keyof I_1["chainPolicies"][number]["requirements"], keyof {
                collection?: {
                    apiInterface?: string | undefined;
                    internalPath?: string | undefined;
                    type?: string | undefined;
                    addOn?: string | undefined;
                } | undefined;
                extensions?: string[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I_1["chainPolicies"][number], keyof ChainPolicy>]: never; })[] & { [K_19 in Exclude<keyof I_1["chainPolicies"], keyof {
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
        } & { [K_20 in Exclude<keyof I_1["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
        } & { [K_21 in Exclude<keyof I_1["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
        } & { [K_22 in Exclude<keyof I_1["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
        } & { [K_23 in Exclude<keyof I_1["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
        selectedProvidersMode?: selectedProvidersMode | undefined;
        selectedProviders?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["selectedProviders"], keyof string[]>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof Policy>]: never; }>(object: I_1): Policy;
};
export declare const ChainPolicy: {
    encode(message: ChainPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainPolicy;
    fromJSON(object: any): ChainPolicy;
    toJSON(message: ChainPolicy): unknown;
    create<I extends {
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
        apis?: (string[] & string[] & { [K in Exclude<keyof I["apis"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["requirements"][number]["collection"], keyof CollectionData>]: never; }) | undefined;
            extensions?: (string[] & string[] & { [K_2 in Exclude<keyof I["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["requirements"][number], keyof ChainRequirement>]: never; })[] & { [K_4 in Exclude<keyof I["requirements"], keyof {
            collection?: {
                apiInterface?: string | undefined;
                internalPath?: string | undefined;
                type?: string | undefined;
                addOn?: string | undefined;
            } | undefined;
            extensions?: string[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ChainPolicy>]: never; }>(base?: I | undefined): ChainPolicy;
    fromPartial<I_1 extends {
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
        apis?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["apis"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["requirements"][number]["collection"], keyof CollectionData>]: never; }) | undefined;
            extensions?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["requirements"][number], keyof ChainRequirement>]: never; })[] & { [K_10 in Exclude<keyof I_1["requirements"], keyof {
            collection?: {
                apiInterface?: string | undefined;
                internalPath?: string | undefined;
                type?: string | undefined;
                addOn?: string | undefined;
            } | undefined;
            extensions?: string[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof ChainPolicy>]: never; }>(object: I_1): ChainPolicy;
};
export declare const ChainRequirement: {
    encode(message: ChainRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainRequirement;
    fromJSON(object: any): ChainRequirement;
    toJSON(message: ChainRequirement): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["collection"], keyof CollectionData>]: never; }) | undefined;
        extensions?: (string[] & string[] & { [K_1 in Exclude<keyof I["extensions"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ChainRequirement>]: never; }>(base?: I | undefined): ChainRequirement;
    fromPartial<I_1 extends {
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
        } & { [K_3 in Exclude<keyof I_1["collection"], keyof CollectionData>]: never; }) | undefined;
        extensions?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["extensions"], keyof string[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof ChainRequirement>]: never; }>(object: I_1): ChainRequirement;
};
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
