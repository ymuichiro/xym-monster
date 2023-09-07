import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfTransactionStatementDTOReceiptsInner(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "senderAddress" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
export function TransactionStatementDTOReceiptsInnerFromJSON(json) {
    return TransactionStatementDTOReceiptsInnerFromJSONTyped(json, false);
}
export function TransactionStatementDTOReceiptsInnerFromJSONTyped(json, ignoreDiscriminator) {
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
        'targetAddress': json['targetAddress'],
        'artifactId': json['artifactId'],
    };
}
export function TransactionStatementDTOReceiptsInnerToJSON(value) {
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
        'targetAddress': value.targetAddress,
        'artifactId': value.artifactId,
    };
}
