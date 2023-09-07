export function instanceOfPagination(value) {
    let isInstance = true;
    isInstance = isInstance && "pageNumber" in value;
    isInstance = isInstance && "pageSize" in value;
    return isInstance;
}
export function PaginationFromJSON(json) {
    return PaginationFromJSONTyped(json, false);
}
export function PaginationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pageNumber': json['pageNumber'],
        'pageSize': json['pageSize'],
    };
}
export function PaginationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pageNumber': value.pageNumber,
        'pageSize': value.pageSize,
    };
}
