import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ReceiptDTOFromJSON(json) {
    return ReceiptDTOFromJSONTyped(json, false);
}
export function ReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
    };
}
export function ReceiptDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'type': ReceiptTypeEnumToJSON(value.type),
    };
}
