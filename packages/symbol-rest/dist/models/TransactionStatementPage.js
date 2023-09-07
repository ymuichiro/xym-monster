import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
import { TransactionStatementInfoDTOFromJSON, TransactionStatementInfoDTOToJSON, } from './TransactionStatementInfoDTO';
export function instanceOfTransactionStatementPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function TransactionStatementPageFromJSON(json) {
    return TransactionStatementPageFromJSONTyped(json, false);
}
export function TransactionStatementPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(TransactionStatementInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function TransactionStatementPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(TransactionStatementInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
