import type { MosaicAddressRestrictionEntryWrapperDTO } from './MosaicAddressRestrictionEntryWrapperDTO';
export interface MosaicAddressRestrictionDTO {
    id: string;
    mosaicRestrictionEntry: MosaicAddressRestrictionEntryWrapperDTO;
}
export declare function instanceOfMosaicAddressRestrictionDTO(value: object): boolean;
export declare function MosaicAddressRestrictionDTOFromJSON(json: any): MosaicAddressRestrictionDTO;
export declare function MosaicAddressRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionDTO;
export declare function MosaicAddressRestrictionDTOToJSON(value?: MosaicAddressRestrictionDTO | null): any;
