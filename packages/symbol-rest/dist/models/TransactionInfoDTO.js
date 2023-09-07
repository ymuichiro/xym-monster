import { TransactionInfoDTOMetaFromJSON, TransactionInfoDTOMetaToJSON, } from './TransactionInfoDTOMeta';
import { TransactionInfoDTOTransactionFromJSON, TransactionInfoDTOTransactionToJSON, } from './TransactionInfoDTOTransaction';
export function instanceOfTransactionInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "transaction" in value;
    return isInstance;
}
export function TransactionInfoDTOFromJSON(json) {
    return TransactionInfoDTOFromJSONTyped(json, false);
}
export function TransactionInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': TransactionInfoDTOMetaFromJSON(json['meta']),
        'transaction': TransactionInfoDTOTransactionFromJSON(json['transaction']),
    };
}
export function TransactionInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': TransactionInfoDTOMetaToJSON(value.meta),
        'transaction': TransactionInfoDTOTransactionToJSON(value.transaction),
    };
}
