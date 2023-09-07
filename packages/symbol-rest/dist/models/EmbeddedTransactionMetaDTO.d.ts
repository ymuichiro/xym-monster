export interface EmbeddedTransactionMetaDTO {
    height: string;
    aggregateHash: string;
    aggregateId: string;
    index: number;
    timestamp?: string;
    feeMultiplier?: number;
}
export declare function instanceOfEmbeddedTransactionMetaDTO(value: object): boolean;
export declare function EmbeddedTransactionMetaDTOFromJSON(json: any): EmbeddedTransactionMetaDTO;
export declare function EmbeddedTransactionMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionMetaDTO;
export declare function EmbeddedTransactionMetaDTOToJSON(value?: EmbeddedTransactionMetaDTO | null): any;
