import type { MosaicAddressRestrictionEntryDTO } from './MosaicAddressRestrictionEntryDTO';
import type { MosaicRestrictionEntryTypeEnum } from './MosaicRestrictionEntryTypeEnum';
export interface MosaicAddressRestrictionEntryWrapperDTO {
    version: number;
    compositeHash: string;
    entryType: MosaicRestrictionEntryTypeEnum;
    mosaicId: string;
    targetAddress: string;
    restrictions: Array<MosaicAddressRestrictionEntryDTO>;
}
export declare function instanceOfMosaicAddressRestrictionEntryWrapperDTO(value: object): boolean;
export declare function MosaicAddressRestrictionEntryWrapperDTOFromJSON(json: any): MosaicAddressRestrictionEntryWrapperDTO;
export declare function MosaicAddressRestrictionEntryWrapperDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionEntryWrapperDTO;
export declare function MosaicAddressRestrictionEntryWrapperDTOToJSON(value?: MosaicAddressRestrictionEntryWrapperDTO | null): any;
