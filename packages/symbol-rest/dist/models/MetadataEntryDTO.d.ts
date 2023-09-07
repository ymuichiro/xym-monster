import type { MetadataEntryDTOTargetId } from './MetadataEntryDTOTargetId';
import type { MetadataTypeEnum } from './MetadataTypeEnum';
export interface MetadataEntryDTO {
    version: number;
    compositeHash: string;
    sourceAddress: string;
    targetAddress: string;
    scopedMetadataKey: string;
    targetId?: MetadataEntryDTOTargetId;
    metadataType: MetadataTypeEnum;
    value: string;
}
export declare function instanceOfMetadataEntryDTO(value: object): boolean;
export declare function MetadataEntryDTOFromJSON(json: any): MetadataEntryDTO;
export declare function MetadataEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataEntryDTO;
export declare function MetadataEntryDTOToJSON(value?: MetadataEntryDTO | null): any;
