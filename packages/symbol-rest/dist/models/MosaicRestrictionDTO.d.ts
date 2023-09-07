import type { MosaicGlobalRestrictionEntryWrapperDTO } from './MosaicGlobalRestrictionEntryWrapperDTO';
export interface MosaicRestrictionDTO {
    id: string;
    mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTO;
}
export declare function instanceOfMosaicRestrictionDTO(value: object): boolean;
export declare function MosaicRestrictionDTOFromJSON(json: any): MosaicRestrictionDTO;
export declare function MosaicRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionDTO;
export declare function MosaicRestrictionDTOToJSON(value?: MosaicRestrictionDTO | null): any;
