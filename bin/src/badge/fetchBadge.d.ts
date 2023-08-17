import { GenerateBadgeResponse } from "../grpc_web_services/lavanet/lava/pairing/badges_pb";
export declare const TimoutFailureFetchingBadgeError: Error;
/**
 * Interface for managing Badges
 */
export interface BadgeOptions {
    badgeServerAddress: string;
    projectId: string;
    authentication?: string;
}
export declare class BadgeManager {
    private badgeServerAddress;
    private projectId;
    private authentication;
    private active;
    constructor(options: BadgeOptions | undefined);
    isActive(): boolean;
    fetchBadge(badgeUser: string): Promise<GenerateBadgeResponse | Error>;
    private timeoutPromise;
    private relayWithTimeout;
}
