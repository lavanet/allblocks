export declare class ScoreStore {
    readonly num: number;
    readonly denom: number;
    readonly time: number;
    constructor(num: number, denom: number, time: number);
    /**
     * Calculates the time decayed score update between two `ScoreStore` entries.
     * It uses a decay function with a half life of `halfLife` to factor in the time
     * elapsed since the `oldScore` was recorded. Both the numerator and the denominator
     * are decayed by this function.
     *
     * Additionally, the `newScore` is factored by a weight of `updateWeight`.
     * The function returns a new `ScoreStore` entry with the updated numerator, denominator, and current time.
     *
     * The mathematical equation used to calculate the update is:
     *
     * updatedNum   = oldScore.Num * exp(-(sampleTime - oldScore.time) / halfLife) + newScore.Num * (-(sampleTime - newScore.time) / halfLife) * updateWeight
     * updatedDenom = oldScore.Denom * exp(-(sampleTime - oldScore.time) / halfLife) + newScore.Denom * (-(sampleTime - newScore.time) / halfLife) * updateWeight
     *
     * Note that the returned `ScoreStore` has a new time field set to the sample time.
     */
    static calculateTimeDecayFunctionUpdate(oldScore: ScoreStore, newScore: ScoreStore, halfLife: number, updateWeight: number, sampleTime: number): ScoreStore;
}
