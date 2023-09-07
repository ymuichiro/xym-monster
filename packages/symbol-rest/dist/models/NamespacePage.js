import { NamespaceInfoDTOFromJSON, NamespaceInfoDTOToJSON, } from './NamespaceInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfNamespacePage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function NamespacePageFromJSON(json) {
    return NamespacePageFromJSONTyped(json, false);
}
export function NamespacePageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(NamespaceInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function NamespacePageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(NamespaceInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
