import { exists } from '../runtime';
export function instanceOfTransactionHashes(value) {
    let isInstance = true;
    return isInstance;
}
export function TransactionHashesFromJSON(json) {
    return TransactionHashesFromJSONTyped(json, false);
}
export function TransactionHashesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hashes': !exists(json, 'hashes') ? undefined : json['hashes'],
    };
}
export function TransactionHashesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hashes': value.hashes,
    };
}
