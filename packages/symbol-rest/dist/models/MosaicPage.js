import { MosaicInfoDTOFromJSON, MosaicInfoDTOToJSON, } from './MosaicInfoDTO';
import { PaginationFromJSON, PaginationToJSON, } from './Pagination';
export function instanceOfMosaicPage(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "pagination" in value;
    return isInstance;
}
export function MosaicPageFromJSON(json) {
    return MosaicPageFromJSONTyped(json, false);
}
export function MosaicPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(MosaicInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}
export function MosaicPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(MosaicInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
