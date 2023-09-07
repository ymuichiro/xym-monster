import type { MetadataEntryDTO } from './MetadataEntryDTO';
export interface MetadataInfoDTO {
    id: string;
    metadataEntry: MetadataEntryDTO;
}
export declare function instanceOfMetadataInfoDTO(value: object): boolean;
export declare function MetadataInfoDTOFromJSON(json: any): MetadataInfoDTO;
export declare function MetadataInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataInfoDTO;
export declare function MetadataInfoDTOToJSON(value?: MetadataInfoDTO | null): any;
