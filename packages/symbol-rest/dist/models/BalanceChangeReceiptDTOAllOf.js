export function instanceOfBalanceChangeReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "targetAddress" in value;
    return isInstance;
}
export function BalanceChangeReceiptDTOAllOfFromJSON(json) {
    return BalanceChangeReceiptDTOAllOfFromJSONTyped(json, false);
}
export function BalanceChangeReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'targetAddress': json['targetAddress'],
    };
}
export function BalanceChangeReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'targetAddress': value.targetAddress,
    };
}
