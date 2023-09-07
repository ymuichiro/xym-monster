export function instanceOfSizePrefixedEntityDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    return isInstance;
}
export function SizePrefixedEntityDTOFromJSON(json) {
    return SizePrefixedEntityDTOFromJSONTyped(json, false);
}
export function SizePrefixedEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
    };
}
export function SizePrefixedEntityDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
    };
}
