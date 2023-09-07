import { exists } from '../runtime';
export function instanceOfNamespaceMetadataTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function NamespaceMetadataTransactionBodyDTOFromJSON(json) {
    return NamespaceMetadataTransactionBodyDTOFromJSONTyped(json, false);
}
export function NamespaceMetadataTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}
export function NamespaceMetadataTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetNamespaceId': value.targetNamespaceId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}
