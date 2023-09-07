import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfBalanceTransferReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "senderAddress" in value;
    isInstance = isInstance && "recipientAddress" in value;
    return isInstance;
}
export function BalanceTransferReceiptDTOFromJSON(json) {
    return BalanceTransferReceiptDTOFromJSONTyped(json, false);
}
export function BalanceTransferReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'senderAddress': json['senderAddress'],
        'recipientAddress': json['recipientAddress'],
    };
}
export function BalanceTransferReceiptDTOToJSON(value) {
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
        'senderAddress': value.senderAddress,
        'recipientAddress': value.recipientAddress,
    };
}
