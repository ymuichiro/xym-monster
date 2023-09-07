import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicSupplyRevocationTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    sourceAddress: string;
    mosaicId: string;
    amount: string;
}
export declare function instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyRevocationTransactionDTO;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyRevocationTransactionDTO;
export declare function EmbeddedMosaicSupplyRevocationTransactionDTOToJSON(value?: EmbeddedMosaicSupplyRevocationTransactionDTO | null): any;
