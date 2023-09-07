import { CosignatureDTOFromJSON, CosignatureDTOToJSON, } from './CosignatureDTO';
export function instanceOfAggregateTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "cosignatures" in value;
    return isInstance;
}
export function AggregateTransactionBodyDTOFromJSON(json) {
    return AggregateTransactionBodyDTOFromJSONTyped(json, false);
}
export function AggregateTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionsHash': json['transactionsHash'],
        'cosignatures': (json['cosignatures'].map(CosignatureDTOFromJSON)),
    };
}
export function AggregateTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionsHash': value.transactionsHash,
        'cosignatures': (value.cosignatures.map(CosignatureDTOToJSON)),
    };
}
