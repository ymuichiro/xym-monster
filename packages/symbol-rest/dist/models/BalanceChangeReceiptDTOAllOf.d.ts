export interface BalanceChangeReceiptDTOAllOf {
    mosaicId: string;
    amount: string;
    targetAddress: string;
}
export declare function instanceOfBalanceChangeReceiptDTOAllOf(value: object): boolean;
export declare function BalanceChangeReceiptDTOAllOfFromJSON(json: any): BalanceChangeReceiptDTOAllOf;
export declare function BalanceChangeReceiptDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceChangeReceiptDTOAllOf;
export declare function BalanceChangeReceiptDTOAllOfToJSON(value?: BalanceChangeReceiptDTOAllOf | null): any;
