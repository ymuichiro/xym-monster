import { exists } from '../runtime';
export function instanceOfTransactionMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "merkleComponentHash" in value;
    isInstance = isInstance && "index" in value;
    return isInstance;
}
export function TransactionMetaDTOFromJSON(json) {
    return TransactionMetaDTOFromJSONTyped(json, false);
}
export function TransactionMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'hash': json['hash'],
        'merkleComponentHash': json['merkleComponentHash'],
        'index': json['index'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'feeMultiplier': !exists(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    };
}
export function TransactionMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'hash': value.hash,
        'merkleComponentHash': value.merkleComponentHash,
        'index': value.index,
        'timestamp': value.timestamp,
        'feeMultiplier': value.feeMultiplier,
    };
}
