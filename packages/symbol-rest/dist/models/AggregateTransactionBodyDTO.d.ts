import type { CosignatureDTO } from './CosignatureDTO';
export interface AggregateTransactionBodyDTO {
    transactionsHash: string;
    cosignatures: Array<CosignatureDTO>;
}
export declare function instanceOfAggregateTransactionBodyDTO(value: object): boolean;
export declare function AggregateTransactionBodyDTOFromJSON(json: any): AggregateTransactionBodyDTO;
export declare function AggregateTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionBodyDTO;
export declare function AggregateTransactionBodyDTOToJSON(value?: AggregateTransactionBodyDTO | null): any;
