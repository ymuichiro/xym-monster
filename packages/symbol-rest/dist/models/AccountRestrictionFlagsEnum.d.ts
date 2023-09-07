export declare const AccountRestrictionFlagsEnum: {
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
    readonly NUMBER_16385: 16385;
    readonly NUMBER_16388: 16388;
    readonly NUMBER_32769: 32769;
    readonly NUMBER_32770: 32770;
    readonly NUMBER_49153: 49153;
    readonly NUMBER_49156: 49156;
};
export type AccountRestrictionFlagsEnum = typeof AccountRestrictionFlagsEnum[keyof typeof AccountRestrictionFlagsEnum];
export declare function AccountRestrictionFlagsEnumFromJSON(json: any): AccountRestrictionFlagsEnum;
export declare function AccountRestrictionFlagsEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionFlagsEnum;
export declare function AccountRestrictionFlagsEnumToJSON(value?: AccountRestrictionFlagsEnum | null): any;
