import { AccountInfoDTOFromJSON, AccountInfoDTOToJSON, } from './AccountInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfAccountPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function AccountPageFromJSON(json) {
    return AccountPageFromJSONTyped(json, false);
}
export function AccountPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AccountInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function AccountPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AccountInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
