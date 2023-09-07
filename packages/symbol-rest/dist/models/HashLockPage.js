import { HashLockInfoDTOFromJSON, HashLockInfoDTOToJSON, } from './HashLockInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfHashLockPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function HashLockPageFromJSON(json) {
    return HashLockPageFromJSONTyped(json, false);
}
export function HashLockPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(HashLockInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function HashLockPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(HashLockInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
