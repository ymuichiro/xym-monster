export declare const MetadataTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type MetadataTypeEnum = typeof MetadataTypeEnum[keyof typeof MetadataTypeEnum];
export declare function MetadataTypeEnumFromJSON(json: any): MetadataTypeEnum;
export declare function MetadataTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataTypeEnum;
export declare function MetadataTypeEnumToJSON(value?: MetadataTypeEnum | null): any;
