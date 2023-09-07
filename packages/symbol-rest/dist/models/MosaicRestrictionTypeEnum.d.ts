export declare const MosaicRestrictionTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
    readonly NUMBER_3: 3;
    readonly NUMBER_4: 4;
    readonly NUMBER_5: 5;
    readonly NUMBER_6: 6;
};
export type MosaicRestrictionTypeEnum = typeof MosaicRestrictionTypeEnum[keyof typeof MosaicRestrictionTypeEnum];
export declare function MosaicRestrictionTypeEnumFromJSON(json: any): MosaicRestrictionTypeEnum;
export declare function MosaicRestrictionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionTypeEnum;
export declare function MosaicRestrictionTypeEnumToJSON(value?: MosaicRestrictionTypeEnum | null): any;
