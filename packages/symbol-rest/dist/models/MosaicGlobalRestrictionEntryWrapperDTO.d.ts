import type { MosaicGlobalRestrictionEntryDTO } from './MosaicGlobalRestrictionEntryDTO';
import type { MosaicRestrictionEntryTypeEnum } from './MosaicRestrictionEntryTypeEnum';
export interface MosaicGlobalRestrictionEntryWrapperDTO {
    version: number;
    compositeHash: string;
    entryType: MosaicRestrictionEntryTypeEnum;
    mosaicId: string;
    restrictions: Array<MosaicGlobalRestrictionEntryDTO>;
}
export declare function instanceOfMosaicGlobalRestrictionEntryWrapperDTO(value: object): boolean;
export declare function MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json: any): MosaicGlobalRestrictionEntryWrapperDTO;
export declare function MosaicGlobalRestrictionEntryWrapperDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryWrapperDTO;
export declare function MosaicGlobalRestrictionEntryWrapperDTOToJSON(value?: MosaicGlobalRestrictionEntryWrapperDTO | null): any;
