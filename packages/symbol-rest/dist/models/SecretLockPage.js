import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
import { SecretLockInfoDTOFromJSON, SecretLockInfoDTOToJSON, } from './SecretLockInfoDTO';
export function instanceOfSecretLockPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function SecretLockPageFromJSON(json) {
    return SecretLockPageFromJSONTyped(json, false);
}
export function SecretLockPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(SecretLockInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function SecretLockPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(SecretLockInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
