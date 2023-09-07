import type { MosaicGlobalRestrictionEntryRestrictionDTO } from './MosaicGlobalRestrictionEntryRestrictionDTO';
export interface MosaicGlobalRestrictionEntryDTO {
    key: string;
    restriction: MosaicGlobalRestrictionEntryRestrictionDTO;
}
export declare function instanceOfMosaicGlobalRestrictionEntryDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionEntryDTOFromJSON(json: any): MosaicGlobalRestrictionEntryDTO;
export declare function MosaicGlobalRestrictionEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryDTO;
export declare function MosaicGlobalRestrictionEntryDTOToJSON(value?: MosaicGlobalRestrictionEntryDTO | null): any;
