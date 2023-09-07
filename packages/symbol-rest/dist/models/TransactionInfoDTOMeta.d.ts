export interface TransactionInfoDTOMeta {
    height: string;
    hash: string;
    merkleComponentHash: string;
    index: number;
    timestamp?: string;
    feeMultiplier?: number;
    aggregateHash: string;
    aggregateId: string;
}
export declare function instanceOfTransactionInfoDTOMeta(value: object): boolean;
export declare function TransactionInfoDTOMetaFromJSON(json: any): TransactionInfoDTOMeta;
export declare function TransactionInfoDTOMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTOMeta;
export declare function TransactionInfoDTOMetaToJSON(value?: TransactionInfoDTOMeta | null): any;
