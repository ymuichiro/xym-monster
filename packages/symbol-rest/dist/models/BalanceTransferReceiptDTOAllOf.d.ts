export interface BalanceTransferReceiptDTOAllOf {
    mosaicId: string;
    amount: string;
    senderAddress: string;
    recipientAddress: string;
}
export declare function instanceOfBalanceTransferReceiptDTOAllOf(value: object): boolean;
export declare function BalanceTransferReceiptDTOAllOfFromJSON(json: any): BalanceTransferReceiptDTOAllOf;
export declare function BalanceTransferReceiptDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceTransferReceiptDTOAllOf;
export declare function BalanceTransferReceiptDTOAllOfToJSON(value?: BalanceTransferReceiptDTOAllOf | null): any;
