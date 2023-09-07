import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
import { ResolutionStatementInfoDTOFromJSON, ResolutionStatementInfoDTOToJSON, } from './ResolutionStatementInfoDTO';
export function instanceOfResolutionStatementPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function ResolutionStatementPageFromJSON(json) {
    return ResolutionStatementPageFromJSONTyped(json, false);
}
export function ResolutionStatementPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(ResolutionStatementInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function ResolutionStatementPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(ResolutionStatementInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
