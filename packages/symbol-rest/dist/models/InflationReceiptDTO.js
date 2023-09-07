import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfInflationReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function InflationReceiptDTOFromJSON(json) {
    return InflationReceiptDTOFromJSONTyped(json, false);
}
export function InflationReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
export function InflationReceiptDTOToJSON(value) {
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
    };
}
