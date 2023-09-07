import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedNamespaceMetadataTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    targetAddress: string;
    scopedMetadataKey: string;
    targetNamespaceId?: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfEmbeddedNamespaceMetadataTransactionDTO(value: object): boolean;
export declare function EmbeddedNamespaceMetadataTransactionDTOFromJSON(json: any): EmbeddedNamespaceMetadataTransactionDTO;
export declare function EmbeddedNamespaceMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedNamespaceMetadataTransactionDTO;
export declare function EmbeddedNamespaceMetadataTransactionDTOToJSON(value?: EmbeddedNamespaceMetadataTransactionDTO | null): any;
