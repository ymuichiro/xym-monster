import { EmbeddedTransactionInfoDTOTransactionFromJSON, EmbeddedTransactionInfoDTOTransactionToJSON, } from './EmbeddedTransactionInfoDTOTransaction';
import { EmbeddedTransactionMetaDTOFromJSON, EmbeddedTransactionMetaDTOToJSON, } from './EmbeddedTransactionMetaDTO';
export function instanceOfEmbeddedTransactionInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "transaction" in value;
    return isInstance;
}
export function EmbeddedTransactionInfoDTOFromJSON(json) {
    return EmbeddedTransactionInfoDTOFromJSONTyped(json, false);
}
export function EmbeddedTransactionInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': EmbeddedTransactionMetaDTOFromJSON(json['meta']),
        'transaction': EmbeddedTransactionInfoDTOTransactionFromJSON(json['transaction']),
    };
}
export function EmbeddedTransactionInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': EmbeddedTransactionMetaDTOToJSON(value.meta),
        'transaction': EmbeddedTransactionInfoDTOTransactionToJSON(value.transaction),
    };
}
