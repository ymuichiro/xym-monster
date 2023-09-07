import { CosignatureDTOFromJSON, CosignatureDTOToJSON, } from './CosignatureDTO';
import { EmbeddedTransactionInfoDTOFromJSON, EmbeddedTransactionInfoDTOToJSON, } from './EmbeddedTransactionInfoDTO';
export function instanceOfAggregateTransactionBodyExtendedDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "cosignatures" in value;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function AggregateTransactionBodyExtendedDTOFromJSON(json) {
    return AggregateTransactionBodyExtendedDTOFromJSONTyped(json, false);
}
export function AggregateTransactionBodyExtendedDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionsHash': json['transactionsHash'],
        'cosignatures': (json['cosignatures'].map(CosignatureDTOFromJSON)),
        'transactions': (json['transactions'].map(EmbeddedTransactionInfoDTOFromJSON)),
    };
}
export function AggregateTransactionBodyExtendedDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionsHash': value.transactionsHash,
        'cosignatures': (value.cosignatures.map(CosignatureDTOToJSON)),
        'transactions': (value.transactions.map(EmbeddedTransactionInfoDTOToJSON)),
    };
}
