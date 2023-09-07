export interface TransactionIds {
    transactionIds?: Array<string>;
}
export declare function instanceOfTransactionIds(value: object): boolean;
export declare function TransactionIdsFromJSON(json: any): TransactionIds;
export declare function TransactionIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIds;
export declare function TransactionIdsToJSON(value?: TransactionIds | null): any;
