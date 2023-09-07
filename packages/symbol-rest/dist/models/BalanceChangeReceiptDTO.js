import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfBalanceChangeReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "targetAddress" in value;
    return isInstance;
}
export function BalanceChangeReceiptDTOFromJSON(json) {
    return BalanceChangeReceiptDTOFromJSONTyped(json, false);
}
export function BalanceChangeReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'targetAddress': json['targetAddress'],
    };
}
export function BalanceChangeReceiptDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'type': ReceiptTypeEnumToJSON(value.type),
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'targetAddress': value.targetAddress,
    };
}
