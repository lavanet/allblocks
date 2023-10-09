"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethod = exports.IsNumber = exports.IsString = exports.DEFAULT_PARSED_RESULT_INDEX = exports.BACKOFF_TIME_ON_FAILURE = exports.FINALIZED_BLOCK = exports.SAFE_BLOCK = exports.PENDING_BLOCK = exports.EARLIEST_BLOCK = exports.LATEST_BLOCK = exports.NOT_APPLICABLE = void 0;
exports.NOT_APPLICABLE = -1;
exports.LATEST_BLOCK = -2;
exports.EARLIEST_BLOCK = -3;
exports.PENDING_BLOCK = -4;
exports.SAFE_BLOCK = -5;
exports.FINALIZED_BLOCK = -6;
exports.BACKOFF_TIME_ON_FAILURE = 3000; // 3 seconds
exports.DEFAULT_PARSED_RESULT_INDEX = 0;
function IsString(value) {
    return typeof value === "string" || value instanceof String;
}
exports.IsString = IsString;
function IsNumber(value) {
    return typeof value === "number" || value instanceof Number;
}
exports.IsNumber = IsNumber;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
