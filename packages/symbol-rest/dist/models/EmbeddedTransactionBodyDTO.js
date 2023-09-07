import { EmbeddedTransactionInfoDTOFromJSON, EmbeddedTransactionInfoDTOToJSON, } from './EmbeddedTransactionInfoDTO';
export function instanceOfEmbeddedTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function EmbeddedTransactionBodyDTOFromJSON(json) {
    return EmbeddedTransactionBodyDTOFromJSONTyped(json, false);
}
export function EmbeddedTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(EmbeddedTransactionInfoDTOFromJSON)),
    };
}
export function EmbeddedTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(EmbeddedTransactionInfoDTOToJSON)),
    };
}
