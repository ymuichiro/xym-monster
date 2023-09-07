import { exists } from '../runtime';
export function instanceOfMetadataNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MetadataNetworkPropertiesDTOFromJSON(json) {
    return MetadataNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MetadataNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxValueSize': !exists(json, 'maxValueSize') ? undefined : json['maxValueSize'],
    };
}
export function MetadataNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxValueSize': value.maxValueSize,
    };
}
