export function instanceOfTransactionFeesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "averageFeeMultiplier" in value;
    isInstance = isInstance && "medianFeeMultiplier" in value;
    isInstance = isInstance && "highestFeeMultiplier" in value;
    isInstance = isInstance && "lowestFeeMultiplier" in value;
    isInstance = isInstance && "minFeeMultiplier" in value;
    return isInstance;
}
export function TransactionFeesDTOFromJSON(json) {
    return TransactionFeesDTOFromJSONTyped(json, false);
}
export function TransactionFeesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageFeeMultiplier': json['averageFeeMultiplier'],
        'medianFeeMultiplier': json['medianFeeMultiplier'],
        'highestFeeMultiplier': json['highestFeeMultiplier'],
        'lowestFeeMultiplier': json['lowestFeeMultiplier'],
        'minFeeMultiplier': json['minFeeMultiplier'],
    };
}
export function TransactionFeesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageFeeMultiplier': value.averageFeeMultiplier,
        'medianFeeMultiplier': value.medianFeeMultiplier,
        'highestFeeMultiplier': value.highestFeeMultiplier,
        'lowestFeeMultiplier': value.lowestFeeMultiplier,
        'minFeeMultiplier': value.minFeeMultiplier,
    };
}
