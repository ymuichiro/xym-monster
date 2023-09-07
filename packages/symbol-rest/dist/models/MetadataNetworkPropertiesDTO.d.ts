export interface MetadataNetworkPropertiesDTO {
    maxValueSize?: string;
}
export declare function instanceOfMetadataNetworkPropertiesDTO(value: object): boolean;
export declare function MetadataNetworkPropertiesDTOFromJSON(json: any): MetadataNetworkPropertiesDTO;
export declare function MetadataNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataNetworkPropertiesDTO;
export declare function MetadataNetworkPropertiesDTOToJSON(value?: MetadataNetworkPropertiesDTO | null): any;
