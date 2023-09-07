import type { EmbeddedTransactionInfoDTO } from './EmbeddedTransactionInfoDTO';
export interface EmbeddedTransactionBodyDTO {
    transactions: Array<EmbeddedTransactionInfoDTO>;
}
export declare function instanceOfEmbeddedTransactionBodyDTO(value: object): boolean;
export declare function EmbeddedTransactionBodyDTOFromJSON(json: any): EmbeddedTransactionBodyDTO;
export declare function EmbeddedTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionBodyDTO;
export declare function EmbeddedTransactionBodyDTOToJSON(value?: EmbeddedTransactionBodyDTO | null): any;
