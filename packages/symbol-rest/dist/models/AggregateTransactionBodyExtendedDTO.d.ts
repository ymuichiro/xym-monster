import type { CosignatureDTO } from './CosignatureDTO';
import type { EmbeddedTransactionInfoDTO } from './EmbeddedTransactionInfoDTO';
export interface AggregateTransactionBodyExtendedDTO {
    transactionsHash: string;
    cosignatures: Array<CosignatureDTO>;
    transactions: Array<EmbeddedTransactionInfoDTO>;
}
export declare function instanceOfAggregateTransactionBodyExtendedDTO(value: object): boolean;
export declare function AggregateTransactionBodyExtendedDTOFromJSON(json: any): AggregateTransactionBodyExtendedDTO;
export declare function AggregateTransactionBodyExtendedDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionBodyExtendedDTO;
export declare function AggregateTransactionBodyExtendedDTOToJSON(value?: AggregateTransactionBodyExtendedDTO | null): any;
