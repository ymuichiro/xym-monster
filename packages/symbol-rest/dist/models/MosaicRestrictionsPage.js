import { MosaicRestrictionsPageDataInnerFromJSON, MosaicRestrictionsPageDataInnerToJSON, } from './MosaicRestrictionsPageDataInner';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfMosaicRestrictionsPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function MosaicRestrictionsPageFromJSON(json) {
    return MosaicRestrictionsPageFromJSONTyped(json, false);
}
export function MosaicRestrictionsPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(MosaicRestrictionsPageDataInnerFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function MosaicRestrictionsPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(MosaicRestrictionsPageDataInnerToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
