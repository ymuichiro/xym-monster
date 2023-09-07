import { MosaicAddressRestrictionEntryWrapperDTOFromJSON, MosaicAddressRestrictionEntryWrapperDTOToJSON, } from './MosaicAddressRestrictionEntryWrapperDTO';
export function instanceOfMosaicAddressRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaicRestrictionEntry" in value;
    return isInstance;
}
export function MosaicAddressRestrictionDTOFromJSON(json) {
    return MosaicAddressRestrictionDTOFromJSONTyped(json, false);
}
export function MosaicAddressRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaicRestrictionEntry': MosaicAddressRestrictionEntryWrapperDTOFromJSON(json['mosaicRestrictionEntry']),
    };
}
export function MosaicAddressRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'mosaicRestrictionEntry': MosaicAddressRestrictionEntryWrapperDTOToJSON(value.mosaicRestrictionEntry),
    };
}
