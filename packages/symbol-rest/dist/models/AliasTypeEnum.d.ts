export declare const AliasTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
};
export type AliasTypeEnum = typeof AliasTypeEnum[keyof typeof AliasTypeEnum];
export declare function AliasTypeEnumFromJSON(json: any): AliasTypeEnum;
export declare function AliasTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasTypeEnum;
export declare function AliasTypeEnumToJSON(value?: AliasTypeEnum | null): any;
