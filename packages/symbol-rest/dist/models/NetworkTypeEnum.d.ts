export declare const NetworkTypeEnum: {
    readonly NUMBER_104: 104;
    readonly NUMBER_152: 152;
};
export type NetworkTypeEnum = typeof NetworkTypeEnum[keyof typeof NetworkTypeEnum];
export declare function NetworkTypeEnumFromJSON(json: any): NetworkTypeEnum;
export declare function NetworkTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkTypeEnum;
export declare function NetworkTypeEnumToJSON(value?: NetworkTypeEnum | null): any;
