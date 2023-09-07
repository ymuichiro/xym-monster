import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
export function instanceOfSecretProofTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;
    return isInstance;
}
export function SecretProofTransactionBodyDTOFromJSON(json) {
    return SecretProofTransactionBodyDTOFromJSONTyped(json, false);
}
export function SecretProofTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'proof': json['proof'],
    };
}
export function SecretProofTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'proof': value.proof,
    };
}
