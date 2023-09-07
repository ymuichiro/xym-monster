import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
export interface MosaicGlobalRestrictionTransactionBodyDTO {
    mosaicId: string;
    referenceMosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    previousRestrictionType: MosaicRestrictionTypeEnum;
    newRestrictionType: MosaicRestrictionTypeEnum;
}
export declare function instanceOfMosaicGlobalRestrictionTransactionBodyDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionTransactionBodyDTOFromJSON(json: any): MosaicGlobalRestrictionTransactionBodyDTO;
export declare function MosaicGlobalRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionTransactionBodyDTO;
export declare function MosaicGlobalRestrictionTransactionBodyDTOToJSON(value?: MosaicGlobalRestrictionTransactionBodyDTO | null): any;
