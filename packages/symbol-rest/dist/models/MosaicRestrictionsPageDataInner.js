import { MosaicGlobalRestrictionEntryWrapperDTOFromJSON, MosaicGlobalRestrictionEntryWrapperDTOToJSON, } from './MosaicGlobalRestrictionEntryWrapperDTO';
export function instanceOfMosaicRestrictionsPageDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
export function MosaicRestrictionsPageDataInnerFromJSON(json) {
    return MosaicRestrictionsPageDataInnerFromJSONTyped(json, false);
}
export function MosaicRestrictionsPageDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json['mosaicRestrictionEntry']),
    };
}
export function MosaicRestrictionsPageDataInnerToJSON(value) {
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
