import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicAddressRestrictionTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    mosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    targetAddress: string;
}
export declare function instanceOfMosaicAddressRestrictionTransactionDTO(value: object): boolean;
export declare function MosaicAddressRestrictionTransactionDTOFromJSON(json: any): MosaicAddressRestrictionTransactionDTO;
export declare function MosaicAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionTransactionDTO;
export declare function MosaicAddressRestrictionTransactionDTOToJSON(value?: MosaicAddressRestrictionTransactionDTO | null): any;
