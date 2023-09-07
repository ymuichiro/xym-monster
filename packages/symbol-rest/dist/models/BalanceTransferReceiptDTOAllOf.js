export function instanceOfBalanceTransferReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "senderAddress" in value;
    isInstance = isInstance && "recipientAddress" in value;
    return isInstance;
}
export function BalanceTransferReceiptDTOAllOfFromJSON(json) {
    return BalanceTransferReceiptDTOAllOfFromJSONTyped(json, false);
}
export function BalanceTransferReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'senderAddress': json['senderAddress'],
        'recipientAddress': json['recipientAddress'],
    };
}
export function BalanceTransferReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'senderAddress': value.senderAddress,
        'recipientAddress': value.recipientAddress,
    };
}
