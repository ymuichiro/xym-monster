export interface MosaicNetworkPropertiesDTO {
    maxMosaicsPerAccount?: string;
    maxMosaicDuration?: string;
    maxMosaicDivisibility?: string;
    mosaicRentalFeeSinkAddress?: string;
    mosaicRentalFee?: string;
}
export declare function instanceOfMosaicNetworkPropertiesDTO(value: object): boolean;
export declare function MosaicNetworkPropertiesDTOFromJSON(json: any): MosaicNetworkPropertiesDTO;
export declare function MosaicNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicNetworkPropertiesDTO;
export declare function MosaicNetworkPropertiesDTOToJSON(value?: MosaicNetworkPropertiesDTO | null): any;
