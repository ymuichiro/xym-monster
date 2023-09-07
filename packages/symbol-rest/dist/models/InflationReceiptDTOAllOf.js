export function instanceOfInflationReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function InflationReceiptDTOAllOfFromJSON(json) {
    return InflationReceiptDTOAllOfFromJSONTyped(json, false);
}
export function InflationReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
export function InflationReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}
