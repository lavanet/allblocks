"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainRequirement = exports.ChainPolicy = exports.Policy = exports.selectedProvidersModeToJSON = exports.selectedProvidersModeFromJSON = exports.selectedProvidersMode = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const api_collection_1 = require("../spec/api_collection");
exports.protobufPackage = "lavanet.lava.plans";
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
var selectedProvidersMode;
(function (selectedProvidersMode) {
    /** ALLOWED - no providers restrictions */
    selectedProvidersMode[selectedProvidersMode["ALLOWED"] = 0] = "ALLOWED";
    /** MIXED - use the selected providers mixed with randomly chosen providers */
    selectedProvidersMode[selectedProvidersMode["MIXED"] = 1] = "MIXED";
    /** EXCLUSIVE - use only the selected providers */
    selectedProvidersMode[selectedProvidersMode["EXCLUSIVE"] = 2] = "EXCLUSIVE";
    /** DISABLED - selected providers feature is disabled */
    selectedProvidersMode[selectedProvidersMode["DISABLED"] = 3] = "DISABLED";
    selectedProvidersMode[selectedProvidersMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(selectedProvidersMode = exports.selectedProvidersMode || (exports.selectedProvidersMode = {}));
function selectedProvidersModeFromJSON(object) {
    switch (object) {
        case 0:
        case "ALLOWED":
            return selectedProvidersMode.ALLOWED;
        case 1:
        case "MIXED":
            return selectedProvidersMode.MIXED;
        case 2:
        case "EXCLUSIVE":
            return selectedProvidersMode.EXCLUSIVE;
        case 3:
        case "DISABLED":
            return selectedProvidersMode.DISABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return selectedProvidersMode.UNRECOGNIZED;
    }
}
exports.selectedProvidersModeFromJSON = selectedProvidersModeFromJSON;
function selectedProvidersModeToJSON(object) {
    switch (object) {
        case selectedProvidersMode.ALLOWED:
            return "ALLOWED";
        case selectedProvidersMode.MIXED:
            return "MIXED";
        case selectedProvidersMode.EXCLUSIVE:
            return "EXCLUSIVE";
        case selectedProvidersMode.DISABLED:
            return "DISABLED";
        case selectedProvidersMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.selectedProvidersModeToJSON = selectedProvidersModeToJSON;
function createBasePolicy() {
    return {
        chainPolicies: [],
        geolocationProfile: long_1.default.UZERO,
        totalCuLimit: long_1.default.UZERO,
        epochCuLimit: long_1.default.UZERO,
        maxProvidersToPair: long_1.default.UZERO,
        selectedProvidersMode: 0,
        selectedProviders: [],
    };
}
exports.Policy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chainPolicies) {
            exports.ChainPolicy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.geolocationProfile.isZero()) {
            writer.uint32(16).uint64(message.geolocationProfile);
        }
        if (!message.totalCuLimit.isZero()) {
            writer.uint32(24).uint64(message.totalCuLimit);
        }
        if (!message.epochCuLimit.isZero()) {
            writer.uint32(32).uint64(message.epochCuLimit);
        }
        if (!message.maxProvidersToPair.isZero()) {
            writer.uint32(40).uint64(message.maxProvidersToPair);
        }
        if (message.selectedProvidersMode !== 0) {
            writer.uint32(48).int32(message.selectedProvidersMode);
        }
        for (const v of message.selectedProviders) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.chainPolicies.push(exports.ChainPolicy.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.geolocationProfile = reader.uint64();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.totalCuLimit = reader.uint64();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.epochCuLimit = reader.uint64();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.maxProvidersToPair = reader.uint64();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.selectedProvidersMode = reader.int32();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.selectedProviders.push(reader.string());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            chainPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.chainPolicies)
                ? object.chainPolicies.map((e) => exports.ChainPolicy.fromJSON(e))
                : [],
            geolocationProfile: isSet(object.geolocationProfile) ? long_1.default.fromValue(object.geolocationProfile) : long_1.default.UZERO,
            totalCuLimit: isSet(object.totalCuLimit) ? long_1.default.fromValue(object.totalCuLimit) : long_1.default.UZERO,
            epochCuLimit: isSet(object.epochCuLimit) ? long_1.default.fromValue(object.epochCuLimit) : long_1.default.UZERO,
            maxProvidersToPair: isSet(object.maxProvidersToPair) ? long_1.default.fromValue(object.maxProvidersToPair) : long_1.default.UZERO,
            selectedProvidersMode: isSet(object.selectedProvidersMode)
                ? selectedProvidersModeFromJSON(object.selectedProvidersMode)
                : 0,
            selectedProviders: Array.isArray(object === null || object === void 0 ? void 0 : object.selectedProviders)
                ? object.selectedProviders.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chainPolicies) {
            obj.chainPolicies = message.chainPolicies.map((e) => e ? exports.ChainPolicy.toJSON(e) : undefined);
        }
        else {
            obj.chainPolicies = [];
        }
        message.geolocationProfile !== undefined &&
            (obj.geolocationProfile = (message.geolocationProfile || long_1.default.UZERO).toString());
        message.totalCuLimit !== undefined && (obj.totalCuLimit = (message.totalCuLimit || long_1.default.UZERO).toString());
        message.epochCuLimit !== undefined && (obj.epochCuLimit = (message.epochCuLimit || long_1.default.UZERO).toString());
        message.maxProvidersToPair !== undefined &&
            (obj.maxProvidersToPair = (message.maxProvidersToPair || long_1.default.UZERO).toString());
        message.selectedProvidersMode !== undefined &&
            (obj.selectedProvidersMode = selectedProvidersModeToJSON(message.selectedProvidersMode));
        if (message.selectedProviders) {
            obj.selectedProviders = message.selectedProviders.map((e) => e);
        }
        else {
            obj.selectedProviders = [];
        }
        return obj;
    },
    create(base) {
        return exports.Policy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePolicy();
        message.chainPolicies = ((_a = object.chainPolicies) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ChainPolicy.fromPartial(e))) || [];
        message.geolocationProfile = (object.geolocationProfile !== undefined && object.geolocationProfile !== null)
            ? long_1.default.fromValue(object.geolocationProfile)
            : long_1.default.UZERO;
        message.totalCuLimit = (object.totalCuLimit !== undefined && object.totalCuLimit !== null)
            ? long_1.default.fromValue(object.totalCuLimit)
            : long_1.default.UZERO;
        message.epochCuLimit = (object.epochCuLimit !== undefined && object.epochCuLimit !== null)
            ? long_1.default.fromValue(object.epochCuLimit)
            : long_1.default.UZERO;
        message.maxProvidersToPair = (object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null)
            ? long_1.default.fromValue(object.maxProvidersToPair)
            : long_1.default.UZERO;
        message.selectedProvidersMode = (_b = object.selectedProvidersMode) !== null && _b !== void 0 ? _b : 0;
        message.selectedProviders = ((_c = object.selectedProviders) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseChainPolicy() {
    return { chainId: "", apis: [], requirements: [] };
}
exports.ChainPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        for (const v of message.apis) {
            writer.uint32(18).string(v);
        }
        for (const v of message.requirements) {
            exports.ChainRequirement.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.apis.push(reader.string());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.requirements.push(exports.ChainRequirement.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map((e) => String(e)) : [],
            requirements: Array.isArray(object === null || object === void 0 ? void 0 : object.requirements)
                ? object.requirements.map((e) => exports.ChainRequirement.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        if (message.apis) {
            obj.apis = message.apis.map((e) => e);
        }
        else {
            obj.apis = [];
        }
        if (message.requirements) {
            obj.requirements = message.requirements.map((e) => e ? exports.ChainRequirement.toJSON(e) : undefined);
        }
        else {
            obj.requirements = [];
        }
        return obj;
    },
    create(base) {
        return exports.ChainPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseChainPolicy();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.apis = ((_b = object.apis) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.requirements = ((_c = object.requirements) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ChainRequirement.fromPartial(e))) || [];
        return message;
    },
};
function createBaseChainRequirement() {
    return { collection: undefined, extensions: [] };
}
exports.ChainRequirement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collection !== undefined) {
            api_collection_1.CollectionData.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.extensions) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.collection = api_collection_1.CollectionData.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.extensions.push(reader.string());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            collection: isSet(object.collection) ? api_collection_1.CollectionData.fromJSON(object.collection) : undefined,
            extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection ? api_collection_1.CollectionData.toJSON(message.collection) : undefined);
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e);
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    create(base) {
        return exports.ChainRequirement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainRequirement();
        message.collection = (object.collection !== undefined && object.collection !== null)
            ? api_collection_1.CollectionData.fromPartial(object.collection)
            : undefined;
        message.extensions = ((_a = object.extensions) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
