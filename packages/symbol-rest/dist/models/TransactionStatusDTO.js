import { exists } from '../runtime';
import { TransactionGroupEnumFromJSON, TransactionGroupEnumToJSON, } from './TransactionGroupEnum';
import { TransactionStatusEnumFromJSON, TransactionStatusEnumToJSON, } from './TransactionStatusEnum';
export function instanceOfTransactionStatusDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "deadline" in value;
    return isInstance;
}
export function TransactionStatusDTOFromJSON(json) {
    return TransactionStatusDTOFromJSONTyped(json, false);
}
export function TransactionStatusDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'group': TransactionGroupEnumFromJSON(json['group']),
        'code': !exists(json, 'code') ? undefined : TransactionStatusEnumFromJSON(json['code']),
        'hash': json['hash'],
        'deadline': json['deadline'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}
export function TransactionStatusDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'group': TransactionGroupEnumToJSON(value.group),
        'code': TransactionStatusEnumToJSON(value.code),
        'hash': value.hash,
        'deadline': value.deadline,
        'height': value.height,
    };
}
