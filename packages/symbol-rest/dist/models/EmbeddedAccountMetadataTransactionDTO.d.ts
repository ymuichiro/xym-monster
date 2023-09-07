import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedAccountMetadataTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    targetAddress: string;
    scopedMetadataKey: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfEmbeddedAccountMetadataTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountMetadataTransactionDTOFromJSON(json: any): EmbeddedAccountMetadataTransactionDTO;
export declare function EmbeddedAccountMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountMetadataTransactionDTO;
export declare function EmbeddedAccountMetadataTransactionDTOToJSON(value?: EmbeddedAccountMetadataTransactionDTO | null): any;
