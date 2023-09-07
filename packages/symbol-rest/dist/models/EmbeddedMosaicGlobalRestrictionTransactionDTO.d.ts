import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicGlobalRestrictionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    mosaicId: string;
    referenceMosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    previousRestrictionType: MosaicRestrictionTypeEnum;
    newRestrictionType: MosaicRestrictionTypeEnum;
}
export declare function instanceOfEmbeddedMosaicGlobalRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSON(json: any): EmbeddedMosaicGlobalRestrictionTransactionDTO;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicGlobalRestrictionTransactionDTO;
export declare function EmbeddedMosaicGlobalRestrictionTransactionDTOToJSON(value?: EmbeddedMosaicGlobalRestrictionTransactionDTO | null): any;
