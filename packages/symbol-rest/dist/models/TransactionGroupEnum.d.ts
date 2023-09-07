export declare const TransactionGroupEnum: {
    readonly Unconfirmed: "unconfirmed";
    readonly Confirmed: "confirmed";
    readonly Failed: "failed";
    readonly Partial: "partial";
};
export type TransactionGroupEnum = typeof TransactionGroupEnum[keyof typeof TransactionGroupEnum];
export declare function TransactionGroupEnumFromJSON(json: any): TransactionGroupEnum;
export declare function TransactionGroupEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionGroupEnum;
export declare function TransactionGroupEnumToJSON(value?: TransactionGroupEnum | null): any;
