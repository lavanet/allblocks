export declare const NOT_APPLICABLE = -1;
export declare const LATEST_BLOCK = -2;
export declare const EARLIEST_BLOCK = -3;
export declare const PENDING_BLOCK = -4;
export declare const SAFE_BLOCK = -5;
export declare const FINALIZED_BLOCK = -6;
export declare const BACKOFF_TIME_ON_FAILURE = 3000;
export declare const DEFAULT_PARSED_RESULT_INDEX = 0;
export declare function IsString(value: any): boolean;
export declare function IsNumber(value: any): boolean;
export declare enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE"
}
