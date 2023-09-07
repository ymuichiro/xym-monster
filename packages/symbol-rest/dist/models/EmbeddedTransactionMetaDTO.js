import { exists } from '../runtime';
export function instanceOfEmbeddedTransactionMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "aggregateHash" in value;
    isInstance = isInstance && "aggregateId" in value;
    isInstance = isInstance && "index" in value;
    return isInstance;
}
export function EmbeddedTransactionMetaDTOFromJSON(json) {
    return EmbeddedTransactionMetaDTOFromJSONTyped(json, false);
}
export function EmbeddedTransactionMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'aggregateHash': json['aggregateHash'],
        'aggregateId': json['aggregateId'],
        'index': json['index'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'feeMultiplier': !exists(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    };
}
export function EmbeddedTransactionMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'aggregateHash': value.aggregateHash,
        'aggregateId': value.aggregateId,
        'index': value.index,
        'timestamp': value.timestamp,
        'feeMultiplier': value.feeMultiplier,
    };
}
