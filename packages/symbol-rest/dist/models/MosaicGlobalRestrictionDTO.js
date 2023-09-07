import { MosaicGlobalRestrictionEntryWrapperDTOFromJSON, MosaicGlobalRestrictionEntryWrapperDTOToJSON, } from './MosaicGlobalRestrictionEntryWrapperDTO';
export function instanceOfMosaicGlobalRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
export function MosaicGlobalRestrictionDTOFromJSON(json) {
    return MosaicGlobalRestrictionDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json['mosaicRestrictionEntry']),
    };
}
export function MosaicGlobalRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'mosaicRestrictionEntry': MosaicGlobalRestrictionEntryWrapperDTOToJSON(value.mosaicRestrictionEntry),
    };
}
