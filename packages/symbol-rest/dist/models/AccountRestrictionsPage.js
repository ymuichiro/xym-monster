import { AccountRestrictionsInfoDTOFromJSON, AccountRestrictionsInfoDTOToJSON, } from './AccountRestrictionsInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfAccountRestrictionsPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function AccountRestrictionsPageFromJSON(json) {
    return AccountRestrictionsPageFromJSONTyped(json, false);
}
export function AccountRestrictionsPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AccountRestrictionsInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function AccountRestrictionsPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AccountRestrictionsInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
