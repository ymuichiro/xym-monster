import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicSupplyRevocationTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    sourceAddress: string;
    mosaicId: string;
    amount: string;
}
export declare function instanceOfMosaicSupplyRevocationTransactionDTO(value: object): boolean;
export declare function MosaicSupplyRevocationTransactionDTOFromJSON(json: any): MosaicSupplyRevocationTransactionDTO;
export declare function MosaicSupplyRevocationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyRevocationTransactionDTO;
export declare function MosaicSupplyRevocationTransactionDTOToJSON(value?: MosaicSupplyRevocationTransactionDTO | null): any;
