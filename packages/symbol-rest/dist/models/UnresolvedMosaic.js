export function instanceOfUnresolvedMosaic(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function UnresolvedMosaicFromJSON(json) {
    return UnresolvedMosaicFromJSONTyped(json, false);
}
export function UnresolvedMosaicFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'amount': json['amount'],
    };
}
export function UnresolvedMosaicToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'amount': value.amount,
    };
}
