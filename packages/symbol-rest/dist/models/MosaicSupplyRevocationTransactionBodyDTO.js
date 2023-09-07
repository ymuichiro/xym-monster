export function instanceOfMosaicSupplyRevocationTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function MosaicSupplyRevocationTransactionBodyDTOFromJSON(json) {
    return MosaicSupplyRevocationTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicSupplyRevocationTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sourceAddress': json['sourceAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
export function MosaicSupplyRevocationTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sourceAddress': value.sourceAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}
