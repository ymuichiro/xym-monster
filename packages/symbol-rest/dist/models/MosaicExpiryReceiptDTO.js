import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumToJSON, } from './ReceiptTypeEnum';
export function instanceOfMosaicExpiryReceiptDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
export function MosaicExpiryReceiptDTOFromJSON(json) {
    return MosaicExpiryReceiptDTOFromJSONTyped(json, false);
}
export function MosaicExpiryReceiptDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
        'artifactId': json['artifactId'],
    };
}
export function MosaicExpiryReceiptDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'type': ReceiptTypeEnumToJSON(value.type),
        'artifactId': value.artifactId,
    };
}
