export declare const AccountKeyTypeFlagsEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
    readonly NUMBER_2: 2;
    readonly NUMBER_4: 4;
};
export type AccountKeyTypeFlagsEnum = typeof AccountKeyTypeFlagsEnum[keyof typeof AccountKeyTypeFlagsEnum];
export declare function AccountKeyTypeFlagsEnumFromJSON(json: any): AccountKeyTypeFlagsEnum;
export declare function AccountKeyTypeFlagsEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyTypeFlagsEnum;
export declare function AccountKeyTypeFlagsEnumToJSON(value?: AccountKeyTypeFlagsEnum | null): any;
