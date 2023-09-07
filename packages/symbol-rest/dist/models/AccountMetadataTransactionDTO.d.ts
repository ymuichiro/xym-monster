import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AccountMetadataTransactionDTO {
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
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfAccountMetadataTransactionDTO(value: object): boolean;
export declare function AccountMetadataTransactionDTOFromJSON(json: any): AccountMetadataTransactionDTO;
export declare function AccountMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMetadataTransactionDTO;
export declare function AccountMetadataTransactionDTOToJSON(value?: AccountMetadataTransactionDTO | null): any;
