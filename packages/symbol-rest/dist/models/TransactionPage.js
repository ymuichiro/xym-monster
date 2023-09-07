import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
import { TransactionInfoDTOFromJSON, TransactionInfoDTOToJSON, } from './TransactionInfoDTO';
export function instanceOfTransactionPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function TransactionPageFromJSON(json) {
    return TransactionPageFromJSONTyped(json, false);
}
export function TransactionPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(TransactionInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function TransactionPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(TransactionInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
