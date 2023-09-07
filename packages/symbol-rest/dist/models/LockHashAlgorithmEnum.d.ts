export declare const LockHashAlgorithmEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type LockHashAlgorithmEnum = typeof LockHashAlgorithmEnum[keyof typeof LockHashAlgorithmEnum];
export declare function LockHashAlgorithmEnumFromJSON(json: any): LockHashAlgorithmEnum;
export declare function LockHashAlgorithmEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockHashAlgorithmEnum;
export declare function LockHashAlgorithmEnumToJSON(value?: LockHashAlgorithmEnum | null): any;
