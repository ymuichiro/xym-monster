import { exists } from '../runtime';
import { MetadataEntryDTOTargetIdFromJSON, MetadataEntryDTOTargetIdToJSON, } from './MetadataEntryDTOTargetId';
import { MetadataTypeEnumFromJSON, MetadataTypeEnumToJSON, } from './MetadataTypeEnum';
export function instanceOfMetadataEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "compositeHash" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "metadataType" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function MetadataEntryDTOFromJSON(json) {
    return MetadataEntryDTOFromJSONTyped(json, false);
}
export function MetadataEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'compositeHash': json['compositeHash'],
        'sourceAddress': json['sourceAddress'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetId': !exists(json, 'targetId') ? undefined : MetadataEntryDTOTargetIdFromJSON(json['targetId']),
        'metadataType': MetadataTypeEnumFromJSON(json['metadataType']),
        'value': json['value'],
    };
}
export function MetadataEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'compositeHash': value.compositeHash,
        'sourceAddress': value.sourceAddress,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetId': MetadataEntryDTOTargetIdToJSON(value.targetId),
        'metadataType': MetadataTypeEnumToJSON(value.metadataType),
        'value': value.value,
    };
}
