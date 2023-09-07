export declare const AccountOrderByEnum: {
    readonly Id: "id";
    readonly Balance: "balance";
};
export type AccountOrderByEnum = typeof AccountOrderByEnum[keyof typeof AccountOrderByEnum];
export declare function AccountOrderByEnumFromJSON(json: any): AccountOrderByEnum;
export declare function AccountOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOrderByEnum;
export declare function AccountOrderByEnumToJSON(value?: AccountOrderByEnum | null): any;
