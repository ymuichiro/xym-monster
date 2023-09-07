import { MosaicRestrictionTypeEnumFromJSON, MosaicRestrictionTypeEnumToJSON, } from './MosaicRestrictionTypeEnum';
export function instanceOfMosaicGlobalRestrictionEntryRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "referenceMosaicId" in value;
    isInstance = isInstance && "restrictionValue" in value;
    isInstance = isInstance && "restrictionType" in value;
    return isInstance;
}
export function MosaicGlobalRestrictionEntryRestrictionDTOFromJSON(json) {
    return MosaicGlobalRestrictionEntryRestrictionDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionEntryRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionValue': json['restrictionValue'],
        'restrictionType': MosaicRestrictionTypeEnumFromJSON(json['restrictionType']),
    };
}
export function MosaicGlobalRestrictionEntryRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionValue': value.restrictionValue,
        'restrictionType': MosaicRestrictionTypeEnumToJSON(value.restrictionType),
    };
}
