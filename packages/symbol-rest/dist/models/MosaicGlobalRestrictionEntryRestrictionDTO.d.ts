import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
export interface MosaicGlobalRestrictionEntryRestrictionDTO {
    referenceMosaicId: string;
    restrictionValue: string;
    restrictionType: MosaicRestrictionTypeEnum;
}
export declare function instanceOfMosaicGlobalRestrictionEntryRestrictionDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOFromJSON(json: any): MosaicGlobalRestrictionEntryRestrictionDTO;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryRestrictionDTO;
export declare function MosaicGlobalRestrictionEntryRestrictionDTOToJSON(value?: MosaicGlobalRestrictionEntryRestrictionDTO | null): any;
