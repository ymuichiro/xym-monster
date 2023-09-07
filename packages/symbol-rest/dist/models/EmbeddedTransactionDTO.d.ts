import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
}
export declare function instanceOfEmbeddedTransactionDTO(value: object): boolean;
export declare function EmbeddedTransactionDTOFromJSON(json: any): EmbeddedTransactionDTO;
export declare function EmbeddedTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionDTO;
export declare function EmbeddedTransactionDTOToJSON(value?: EmbeddedTransactionDTO | null): any;
