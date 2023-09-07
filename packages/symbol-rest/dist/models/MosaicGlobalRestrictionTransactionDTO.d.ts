import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicGlobalRestrictionTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    mosaicId: string;
    referenceMosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    previousRestrictionType: MosaicRestrictionTypeEnum;
    newRestrictionType: MosaicRestrictionTypeEnum;
}
export declare function instanceOfMosaicGlobalRestrictionTransactionDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionTransactionDTOFromJSON(json: any): MosaicGlobalRestrictionTransactionDTO;
export declare function MosaicGlobalRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionTransactionDTO;
export declare function MosaicGlobalRestrictionTransactionDTOToJSON(value?: MosaicGlobalRestrictionTransactionDTO | null): any;
