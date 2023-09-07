export function instanceOfMosaicAddressRestrictionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function MosaicAddressRestrictionEntryDTOFromJSON(json) {
    return MosaicAddressRestrictionEntryDTOFromJSONTyped(json, false);
}
export function MosaicAddressRestrictionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'value': json['value'],
    };
}
export function MosaicAddressRestrictionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'value': value.value,
    };
}
