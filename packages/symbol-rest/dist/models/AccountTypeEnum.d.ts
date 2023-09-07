export declare const AccountTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
    readonly NUMBER_3: 3;
};
export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum];
export declare function AccountTypeEnumFromJSON(json: any): AccountTypeEnum;
export declare function AccountTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypeEnum;
export declare function AccountTypeEnumToJSON(value?: AccountTypeEnum | null): any;
