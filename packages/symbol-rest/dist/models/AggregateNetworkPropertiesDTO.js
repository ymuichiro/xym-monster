import { exists } from '../runtime';
export function instanceOfAggregateNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function AggregateNetworkPropertiesDTOFromJSON(json) {
    return AggregateNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function AggregateNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxTransactionsPerAggregate': !exists(json, 'maxTransactionsPerAggregate') ? undefined : json['maxTransactionsPerAggregate'],
        'maxCosignaturesPerAggregate': !exists(json, 'maxCosignaturesPerAggregate') ? undefined : json['maxCosignaturesPerAggregate'],
        'enableStrictCosignatureCheck': !exists(json, 'enableStrictCosignatureCheck') ? undefined : json['enableStrictCosignatureCheck'],
        'enableBondedAggregateSupport': !exists(json, 'enableBondedAggregateSupport') ? undefined : json['enableBondedAggregateSupport'],
        'maxBondedTransactionLifetime': !exists(json, 'maxBondedTransactionLifetime') ? undefined : json['maxBondedTransactionLifetime'],
    };
}
export function AggregateNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxTransactionsPerAggregate': value.maxTransactionsPerAggregate,
        'maxCosignaturesPerAggregate': value.maxCosignaturesPerAggregate,
        'enableStrictCosignatureCheck': value.enableStrictCosignatureCheck,
        'enableBondedAggregateSupport': value.enableBondedAggregateSupport,
        'maxBondedTransactionLifetime': value.maxBondedTransactionLifetime,
    };
}
