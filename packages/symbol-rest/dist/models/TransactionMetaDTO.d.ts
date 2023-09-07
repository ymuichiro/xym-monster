export interface TransactionMetaDTO {
    height: string;
    hash: string;
    merkleComponentHash: string;
    index: number;
    timestamp?: string;
    feeMultiplier?: number;
}
export declare function instanceOfTransactionMetaDTO(value: object): boolean;
export declare function TransactionMetaDTOFromJSON(json: any): TransactionMetaDTO;
export declare function TransactionMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMetaDTO;
export declare function TransactionMetaDTOToJSON(value?: TransactionMetaDTO | null): any;
