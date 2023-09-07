import type { EmbeddedTransactionInfoDTOTransaction } from './EmbeddedTransactionInfoDTOTransaction';
import type { EmbeddedTransactionMetaDTO } from './EmbeddedTransactionMetaDTO';
export interface EmbeddedTransactionInfoDTO {
    id: string;
    meta: EmbeddedTransactionMetaDTO;
    transaction: EmbeddedTransactionInfoDTOTransaction;
}
export declare function instanceOfEmbeddedTransactionInfoDTO(value: object): boolean;
export declare function EmbeddedTransactionInfoDTOFromJSON(json: any): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionInfoDTO;
export declare function EmbeddedTransactionInfoDTOToJSON(value?: EmbeddedTransactionInfoDTO | null): any;
