import { BlockInfoDTOFromJSON, BlockInfoDTOToJSON, } from './BlockInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfBlockPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function BlockPageFromJSON(json) {
    return BlockPageFromJSONTyped(json, false);
}
export function BlockPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(BlockInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function BlockPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(BlockInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
