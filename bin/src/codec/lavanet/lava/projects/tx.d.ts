import Long from "long";
import _m0 from "protobufjs/minimal";
import { Policy } from "../plans/policy";
import { ProjectKey } from "./project";
export declare const protobufPackage = "lavanet.lava.projects";
export interface MsgAddKeys {
    creator: string;
    project: string;
    projectKeys: ProjectKey[];
}
export interface MsgAddKeysResponse {
}
export interface MsgDelKeys {
    creator: string;
    project: string;
    projectKeys: ProjectKey[];
}
export interface MsgDelKeysResponse {
}
export interface MsgSetPolicy {
    creator: string;
    project: string;
    policy?: Policy;
}
export interface MsgSetPolicyResponse {
}
export interface MsgSetSubscriptionPolicy {
    creator: string;
    projects: string[];
    policy?: Policy;
}
export interface MsgSetSubscriptionPolicyResponse {
}
export declare const MsgAddKeys: {
    encode(message: MsgAddKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeys;
    fromJSON(object: any): MsgAddKeys;
    toJSON(message: MsgAddKeys): unknown;
    create<I extends {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: {
            key?: string | undefined;
            kinds?: number | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: ({
            key?: string | undefined;
            kinds?: number | undefined;
        }[] & ({
            key?: string | undefined;
            kinds?: number | undefined;
        } & {
            key?: string | undefined;
            kinds?: number | undefined;
        } & { [K in Exclude<keyof I["projectKeys"][number], keyof ProjectKey>]: never; })[] & { [K_1 in Exclude<keyof I["projectKeys"], keyof {
            key?: string | undefined;
            kinds?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgAddKeys>]: never; }>(base?: I | undefined): MsgAddKeys;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: {
            key?: string | undefined;
            kinds?: number | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: ({
            key?: string | undefined;
            kinds?: number | undefined;
        }[] & ({
            key?: string | undefined;
            kinds?: number | undefined;
        } & {
            key?: string | undefined;
            kinds?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["projectKeys"][number], keyof ProjectKey>]: never; })[] & { [K_4 in Exclude<keyof I_1["projectKeys"], keyof {
            key?: string | undefined;
            kinds?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgAddKeys>]: never; }>(object: I_1): MsgAddKeys;
};
export declare const MsgAddKeysResponse: {
    encode(_: MsgAddKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeysResponse;
    fromJSON(_: any): MsgAddKeysResponse;
    toJSON(_: MsgAddKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgAddKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgAddKeysResponse;
};
export declare const MsgDelKeys: {
    encode(message: MsgDelKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelKeys;
    fromJSON(object: any): MsgDelKeys;
    toJSON(message: MsgDelKeys): unknown;
    create<I extends {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: {
            key?: string | undefined;
            kinds?: number | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: ({
            key?: string | undefined;
            kinds?: number | undefined;
        }[] & ({
            key?: string | undefined;
            kinds?: number | undefined;
        } & {
            key?: string | undefined;
            kinds?: number | undefined;
        } & { [K in Exclude<keyof I["projectKeys"][number], keyof ProjectKey>]: never; })[] & { [K_1 in Exclude<keyof I["projectKeys"], keyof {
            key?: string | undefined;
            kinds?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgDelKeys>]: never; }>(base?: I | undefined): MsgDelKeys;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: {
            key?: string | undefined;
            kinds?: number | undefined;
        }[] | undefined;
    } & {
        creator?: string | undefined;
        project?: string | undefined;
        projectKeys?: ({
            key?: string | undefined;
            kinds?: number | undefined;
        }[] & ({
            key?: string | undefined;
            kinds?: number | undefined;
        } & {
            key?: string | undefined;
            kinds?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["projectKeys"][number], keyof ProjectKey>]: never; })[] & { [K_4 in Exclude<keyof I_1["projectKeys"], keyof {
            key?: string | undefined;
            kinds?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgDelKeys>]: never; }>(object: I_1): MsgDelKeys;
};
export declare const MsgDelKeysResponse: {
    encode(_: MsgDelKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelKeysResponse;
    fromJSON(_: any): MsgDelKeysResponse;
    toJSON(_: MsgDelKeysResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgDelKeysResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDelKeysResponse;
};
export declare const MsgSetPolicy: {
    encode(message: MsgSetPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicy;
    fromJSON(object: any): MsgSetPolicy;
    toJSON(message: MsgSetPolicy): unknown;
    create<I extends {
        creator?: string | undefined;
        project?: string | undefined;
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
        creator?: string | undefined;
        project?: string | undefined;
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
                apis?: (string[] & string[] & { [K in Exclude<keyof I["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_1 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                    extensions?: (string[] & string[] & { [K_2 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_4 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"], keyof {
                    collection?: {
                        apiInterface?: string | undefined;
                        internalPath?: string | undefined;
                        type?: string | undefined;
                        addOn?: string | undefined;
                    } | undefined;
                    extensions?: string[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_6 in Exclude<keyof I["policy"]["chainPolicies"], keyof {
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
            } & { [K_7 in Exclude<keyof I["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
            } & { [K_8 in Exclude<keyof I["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
            selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
            selectedProviders?: (string[] & string[] & { [K_11 in Exclude<keyof I["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["policy"], keyof Policy>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, keyof MsgSetPolicy>]: never; }>(base?: I | undefined): MsgSetPolicy;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        project?: string | undefined;
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
        creator?: string | undefined;
        project?: string | undefined;
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
                apis?: (string[] & string[] & { [K_14 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_15 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                    extensions?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_18 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"], keyof {
                    collection?: {
                        apiInterface?: string | undefined;
                        internalPath?: string | undefined;
                        type?: string | undefined;
                        addOn?: string | undefined;
                    } | undefined;
                    extensions?: string[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_20 in Exclude<keyof I_1["policy"]["chainPolicies"], keyof {
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
            } & { [K_21 in Exclude<keyof I_1["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
            } & { [K_22 in Exclude<keyof I_1["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_23 in Exclude<keyof I_1["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_24 in Exclude<keyof I_1["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
            selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
            selectedProviders?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I_1["policy"], keyof Policy>]: never; }) | undefined;
    } & { [K_27 in Exclude<keyof I_1, keyof MsgSetPolicy>]: never; }>(object: I_1): MsgSetPolicy;
};
export declare const MsgSetPolicyResponse: {
    encode(_: MsgSetPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicyResponse;
    fromJSON(_: any): MsgSetPolicyResponse;
    toJSON(_: MsgSetPolicyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgSetPolicyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSetPolicyResponse;
};
export declare const MsgSetSubscriptionPolicy: {
    encode(message: MsgSetSubscriptionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicy;
    fromJSON(object: any): MsgSetSubscriptionPolicy;
    toJSON(message: MsgSetSubscriptionPolicy): unknown;
    create<I extends {
        creator?: string | undefined;
        projects?: string[] | undefined;
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
        creator?: string | undefined;
        projects?: (string[] & string[] & { [K in Exclude<keyof I["projects"], keyof string[]>]: never; }) | undefined;
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
                apis?: (string[] & string[] & { [K_1 in Exclude<keyof I["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_2 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                    extensions?: (string[] & string[] & { [K_3 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_5 in Exclude<keyof I["policy"]["chainPolicies"][number]["requirements"], keyof {
                    collection?: {
                        apiInterface?: string | undefined;
                        internalPath?: string | undefined;
                        type?: string | undefined;
                        addOn?: string | undefined;
                    } | undefined;
                    extensions?: string[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_7 in Exclude<keyof I["policy"]["chainPolicies"], keyof {
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
            } & { [K_8 in Exclude<keyof I["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
            selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
            selectedProviders?: (string[] & string[] & { [K_12 in Exclude<keyof I["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["policy"], keyof Policy>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof MsgSetSubscriptionPolicy>]: never; }>(base?: I | undefined): MsgSetSubscriptionPolicy;
    fromPartial<I_1 extends {
        creator?: string | undefined;
        projects?: string[] | undefined;
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
        creator?: string | undefined;
        projects?: (string[] & string[] & { [K_15 in Exclude<keyof I_1["projects"], keyof string[]>]: never; }) | undefined;
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
                apis?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["apis"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_17 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number]["collection"], keyof import("../spec/api_collection").CollectionData>]: never; }) | undefined;
                    extensions?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number]["extensions"], keyof string[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"][number], keyof import("../plans/policy").ChainRequirement>]: never; })[] & { [K_20 in Exclude<keyof I_1["policy"]["chainPolicies"][number]["requirements"], keyof {
                    collection?: {
                        apiInterface?: string | undefined;
                        internalPath?: string | undefined;
                        type?: string | undefined;
                        addOn?: string | undefined;
                    } | undefined;
                    extensions?: string[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I_1["policy"]["chainPolicies"][number], keyof import("../plans/policy").ChainPolicy>]: never; })[] & { [K_22 in Exclude<keyof I_1["policy"]["chainPolicies"], keyof {
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
            } & { [K_23 in Exclude<keyof I_1["policy"]["geolocationProfile"], keyof Long>]: never; }) | undefined;
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
            } & { [K_24 in Exclude<keyof I_1["policy"]["totalCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_25 in Exclude<keyof I_1["policy"]["epochCuLimit"], keyof Long>]: never; }) | undefined;
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
            } & { [K_26 in Exclude<keyof I_1["policy"]["maxProvidersToPair"], keyof Long>]: never; }) | undefined;
            selectedProvidersMode?: import("../plans/policy").selectedProvidersMode | undefined;
            selectedProviders?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["policy"]["selectedProviders"], keyof string[]>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I_1["policy"], keyof Policy>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof MsgSetSubscriptionPolicy>]: never; }>(object: I_1): MsgSetSubscriptionPolicy;
};
export declare const MsgSetSubscriptionPolicyResponse: {
    encode(_: MsgSetSubscriptionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicyResponse;
    fromJSON(_: any): MsgSetSubscriptionPolicyResponse;
    toJSON(_: MsgSetSubscriptionPolicyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgSetSubscriptionPolicyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSetSubscriptionPolicyResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    AddKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
    DelKeys(request: MsgDelKeys): Promise<MsgDelKeysResponse>;
    SetPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SetSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    AddKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
    DelKeys(request: MsgDelKeys): Promise<MsgDelKeysResponse>;
    SetPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
    SetSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
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
