export interface TransactionHashes {
    hashes?: Array<string>;
}
export declare function instanceOfTransactionHashes(value: object): boolean;
export declare function TransactionHashesFromJSON(json: any): TransactionHashes;
export declare function TransactionHashesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionHashes;
export declare function TransactionHashesToJSON(value?: TransactionHashes | null): any;
