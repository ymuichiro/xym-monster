export declare const LockStatus: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type LockStatus = typeof LockStatus[keyof typeof LockStatus];
export declare function LockStatusFromJSON(json: any): LockStatus;
export declare function LockStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockStatus;
export declare function LockStatusToJSON(value?: LockStatus | null): any;
