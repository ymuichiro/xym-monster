import { MetadataEntryDTOFromJSON, MetadataEntryDTOToJSON, } from './MetadataEntryDTO';
export function instanceOfMetadataInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "metadataEntry" in value;
    return isInstance;
}
export function MetadataInfoDTOFromJSON(json) {
    return MetadataInfoDTOFromJSONTyped(json, false);
}
export function MetadataInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'metadataEntry': MetadataEntryDTOFromJSON(json['metadataEntry']),
    };
}
export function MetadataInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'metadataEntry': MetadataEntryDTOToJSON(value.metadataEntry),
    };
}
