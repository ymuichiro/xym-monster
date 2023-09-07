import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicMetadataTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    targetAddress: string;
    scopedMetadataKey: string;
    targetMosaicId: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfEmbeddedMosaicMetadataTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicMetadataTransactionDTOFromJSON(json: any): EmbeddedMosaicMetadataTransactionDTO;
export declare function EmbeddedMosaicMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicMetadataTransactionDTO;
export declare function EmbeddedMosaicMetadataTransactionDTOToJSON(value?: EmbeddedMosaicMetadataTransactionDTO | null): any;
