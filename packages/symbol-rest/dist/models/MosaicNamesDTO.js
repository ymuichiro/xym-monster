export function instanceOfMosaicNamesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "names" in value;
    return isInstance;
}
export function MosaicNamesDTOFromJSON(json) {
    return MosaicNamesDTOFromJSONTyped(json, false);
}
export function MosaicNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'names': json['names'],
    };
}
export function MosaicNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'names': value.names,
    };
}
