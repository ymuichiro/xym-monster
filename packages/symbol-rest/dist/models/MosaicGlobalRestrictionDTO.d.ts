import type { MosaicGlobalRestrictionEntryWrapperDTO } from './MosaicGlobalRestrictionEntryWrapperDTO';
export interface MosaicGlobalRestrictionDTO {
    id: string;
    mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTO;
}
export declare function instanceOfMosaicGlobalRestrictionDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionDTOFromJSON(json: any): MosaicGlobalRestrictionDTO;
export declare function MosaicGlobalRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionDTO;
export declare function MosaicGlobalRestrictionDTOToJSON(value?: MosaicGlobalRestrictionDTO | null): any;
