import { exists } from '../runtime';
export function instanceOfTransactionPayload(value) {
    let isInstance = true;
    return isInstance;
}
export function TransactionPayloadFromJSON(json) {
    return TransactionPayloadFromJSONTyped(json, false);
}
export function TransactionPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
    };
}
export function TransactionPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payload': value.payload,
    };
}
