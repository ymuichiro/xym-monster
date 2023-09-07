export function instanceOfMosaicDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "supply" in value;
    isInstance = isInstance && "startHeight" in value;
    isInstance = isInstance && "ownerAddress" in value;
    isInstance = isInstance && "revision" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    isInstance = isInstance && "duration" in value;
    return isInstance;
}
export function MosaicDTOFromJSON(json) {
    return MosaicDTOFromJSONTyped(json, false);
}
export function MosaicDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'id': json['id'],
        'supply': json['supply'],
        'startHeight': json['startHeight'],
        'ownerAddress': json['ownerAddress'],
        'revision': json['revision'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
        'duration': json['duration'],
    };
}
export function MosaicDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'id': value.id,
        'supply': value.supply,
        'startHeight': value.startHeight,
        'ownerAddress': value.ownerAddress,
        'revision': value.revision,
        'flags': value.flags,
        'divisibility': value.divisibility,
        'duration': value.duration,
    };
}
