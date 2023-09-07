import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicAddressRestrictionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    mosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    targetAddress: string;
}
export declare function instanceOfEmbeddedMosaicAddressRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSON(json: any): EmbeddedMosaicAddressRestrictionTransactionDTO;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicAddressRestrictionTransactionDTO;
export declare function EmbeddedMosaicAddressRestrictionTransactionDTOToJSON(value?: EmbeddedMosaicAddressRestrictionTransactionDTO | null): any;
