import { MetadataInfoDTOFromJSON, MetadataInfoDTOToJSON, } from './MetadataInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfMetadataPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function MetadataPageFromJSON(json) {
    return MetadataPageFromJSONTyped(json, false);
}
export function MetadataPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(MetadataInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function MetadataPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(MetadataInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
