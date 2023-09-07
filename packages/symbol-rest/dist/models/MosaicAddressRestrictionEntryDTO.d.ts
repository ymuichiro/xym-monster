export interface MosaicAddressRestrictionEntryDTO {
    key: string;
    value: string;
}
export declare function instanceOfMosaicAddressRestrictionEntryDTO(value: object): boolean;
export declare function MosaicAddressRestrictionEntryDTOFromJSON(json: any): MosaicAddressRestrictionEntryDTO;
export declare function MosaicAddressRestrictionEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionEntryDTO;
export declare function MosaicAddressRestrictionEntryDTOToJSON(value?: MosaicAddressRestrictionEntryDTO | null): any;
