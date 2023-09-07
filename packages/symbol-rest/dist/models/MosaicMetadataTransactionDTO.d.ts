import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicMetadataTransactionDTO {
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
    targetMosaicId: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfMosaicMetadataTransactionDTO(value: object): boolean;
export declare function MosaicMetadataTransactionDTOFromJSON(json: any): MosaicMetadataTransactionDTO;
export declare function MosaicMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicMetadataTransactionDTO;
export declare function MosaicMetadataTransactionDTOToJSON(value?: MosaicMetadataTransactionDTO | null): any;
