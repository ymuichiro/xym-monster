export declare const MosaicRestrictionEntryTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type MosaicRestrictionEntryTypeEnum = typeof MosaicRestrictionEntryTypeEnum[keyof typeof MosaicRestrictionEntryTypeEnum];
export declare function MosaicRestrictionEntryTypeEnumFromJSON(json: any): MosaicRestrictionEntryTypeEnum;
export declare function MosaicRestrictionEntryTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionEntryTypeEnum;
export declare function MosaicRestrictionEntryTypeEnumToJSON(value?: MosaicRestrictionEntryTypeEnum | null): any;
