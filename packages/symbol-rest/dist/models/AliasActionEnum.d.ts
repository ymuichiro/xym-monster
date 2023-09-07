export declare const AliasActionEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type AliasActionEnum = typeof AliasActionEnum[keyof typeof AliasActionEnum];
export declare function AliasActionEnumFromJSON(json: any): AliasActionEnum;
export declare function AliasActionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasActionEnum;
export declare function AliasActionEnumToJSON(value?: AliasActionEnum | null): any;
