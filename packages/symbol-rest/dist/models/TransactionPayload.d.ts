export interface TransactionPayload {
    payload?: string;
}
export declare function instanceOfTransactionPayload(value: object): boolean;
export declare function TransactionPayloadFromJSON(json: any): TransactionPayload;
export declare function TransactionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPayload;
export declare function TransactionPayloadToJSON(value?: TransactionPayload | null): any;
