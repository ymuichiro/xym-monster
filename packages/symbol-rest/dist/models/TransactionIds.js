import { exists } from '../runtime';
export function instanceOfTransactionIds(value) {
    let isInstance = true;
    return isInstance;
}
export function TransactionIdsFromJSON(json) {
    return TransactionIdsFromJSONTyped(json, false);
}
export function TransactionIdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionIds': !exists(json, 'transactionIds') ? undefined : json['transactionIds'],
    };
}
export function TransactionIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionIds': value.transactionIds,
    };
}
