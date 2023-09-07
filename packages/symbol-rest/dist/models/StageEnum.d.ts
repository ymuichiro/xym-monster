export declare const StageEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type StageEnum = typeof StageEnum[keyof typeof StageEnum];
export declare function StageEnumFromJSON(json: any): StageEnum;
export declare function StageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageEnum;
export declare function StageEnumToJSON(value?: StageEnum | null): any;
