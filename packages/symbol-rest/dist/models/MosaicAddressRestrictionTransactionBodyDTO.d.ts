export interface MosaicAddressRestrictionTransactionBodyDTO {
    mosaicId: string;
    restrictionKey: string;
    previousRestrictionValue: string;
    newRestrictionValue: string;
    targetAddress: string;
}
export declare function instanceOfMosaicAddressRestrictionTransactionBodyDTO(value: object): boolean;
export declare function MosaicAddressRestrictionTransactionBodyDTOFromJSON(json: any): MosaicAddressRestrictionTransactionBodyDTO;
export declare function MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionTransactionBodyDTO;
export declare function MosaicAddressRestrictionTransactionBodyDTOToJSON(value?: MosaicAddressRestrictionTransactionBodyDTO | null): any;
