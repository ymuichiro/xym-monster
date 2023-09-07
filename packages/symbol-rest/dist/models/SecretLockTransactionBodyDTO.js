import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
export function instanceOfSecretLockTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    return isInstance;
}
export function SecretLockTransactionBodyDTOFromJSON(json) {
    return SecretLockTransactionBodyDTOFromJSONTyped(json, false);
}
export function SecretLockTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
    };
}
export function SecretLockTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
    };
}
