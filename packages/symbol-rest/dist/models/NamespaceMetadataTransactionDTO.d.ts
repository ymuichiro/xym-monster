import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface NamespaceMetadataTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    targetAddress: string;
    scopedMetadataKey: string;
    targetNamespaceId?: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfNamespaceMetadataTransactionDTO(value: object): boolean;
export declare function NamespaceMetadataTransactionDTOFromJSON(json: any): NamespaceMetadataTransactionDTO;
export declare function NamespaceMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetadataTransactionDTO;
export declare function NamespaceMetadataTransactionDTOToJSON(value?: NamespaceMetadataTransactionDTO | null): any;
