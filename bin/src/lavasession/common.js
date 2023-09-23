"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DECIMAL_PRECISION = exports.AVERAGE_WORLD_LATENCY = exports.MIN_PROVIDERS_FOR_SYNC = exports.PERCENTILE_TO_CALCULATE_LATENCY = exports.MAXIMUM_NUMBER_OF_FAILURES_ALLOWED_PER_CONSUMER_SESSION = exports.RELAY_NUMBER_INCREMENT = exports.MAX_SESSIONS_ALLOWED_PER_PROVIDER = exports.MAX_ALLOWED_BLOCK_LISTED_SESSION_PER_PROVIDER = exports.AVAILABILITY_PERCENTAGE = void 0;
exports.AVAILABILITY_PERCENTAGE = 0.1;
exports.MAX_ALLOWED_BLOCK_LISTED_SESSION_PER_PROVIDER = 3;
exports.MAX_SESSIONS_ALLOWED_PER_PROVIDER = 1000;
exports.RELAY_NUMBER_INCREMENT = 1;
exports.MAXIMUM_NUMBER_OF_FAILURES_ALLOWED_PER_CONSUMER_SESSION = 3;
exports.PERCENTILE_TO_CALCULATE_LATENCY = 0.9;
exports.MIN_PROVIDERS_FOR_SYNC = 0.6;
// TODO: move this in proper package
exports.AVERAGE_WORLD_LATENCY = 300; // time in milliseconds
exports.DEFAULT_DECIMAL_PRECISION = 18; // same default precision as golang cosmos sdk decimal
