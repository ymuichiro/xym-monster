import { MosaicGlobalRestrictionEntryWrapperDTOFromJSON, MosaicGlobalRestrictionEntryWrapperDTOToJSON, } from './MosaicGlobalRestrictionEntryWrapperDTO';
export function instanceOfMosaicRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
export function MosaicRestrictionDTOFromJSON(json) {
    return MosaicRestrictionDTOFromJSONTyped(json, false);
}
export function MosaicRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json['mosaicRestrictionEntry']),
    };
}
export function MosaicRestrictionDTOToJSON(value) {
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
