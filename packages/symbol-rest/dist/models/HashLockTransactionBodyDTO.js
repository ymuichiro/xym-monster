export function instanceOfHashLockTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hash" in value;
    return isInstance;
}
export function HashLockTransactionBodyDTOFromJSON(json) {
    return HashLockTransactionBodyDTOFromJSONTyped(json, false);
}
export function HashLockTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hash': json['hash'],
    };
}
export function HashLockTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hash': value.hash,
    };
}
