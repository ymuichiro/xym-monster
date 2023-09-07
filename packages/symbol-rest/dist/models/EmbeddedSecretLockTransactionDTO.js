import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedSecretLockTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    return isInstance;
}
export function EmbeddedSecretLockTransactionDTOFromJSON(json) {
    return EmbeddedSecretLockTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedSecretLockTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
    };
}
export function EmbeddedSecretLockTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
    };
}
