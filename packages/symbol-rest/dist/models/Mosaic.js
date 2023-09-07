export function instanceOfMosaic(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function MosaicFromJSON(json) {
    return MosaicFromJSONTyped(json, false);
}
export function MosaicFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'amount': json['amount'],
    };
}
export function MosaicToJSON(value) {
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
