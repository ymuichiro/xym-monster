import { MosaicGlobalRestrictionEntryRestrictionDTOFromJSON, MosaicGlobalRestrictionEntryRestrictionDTOToJSON, } from './MosaicGlobalRestrictionEntryRestrictionDTO';
export function instanceOfMosaicGlobalRestrictionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "restriction" in value;
    return isInstance;
}
export function MosaicGlobalRestrictionEntryDTOFromJSON(json) {
    return MosaicGlobalRestrictionEntryDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'restriction': MosaicGlobalRestrictionEntryRestrictionDTOFromJSON(json['restriction']),
    };
}
export function MosaicGlobalRestrictionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'restriction': MosaicGlobalRestrictionEntryRestrictionDTOToJSON(value.restriction),
    };
}
