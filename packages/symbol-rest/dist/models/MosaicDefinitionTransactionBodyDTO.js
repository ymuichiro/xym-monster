export function instanceOfMosaicDefinitionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    return isInstance;
}
export function MosaicDefinitionTransactionBodyDTOFromJSON(json) {
    return MosaicDefinitionTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicDefinitionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'duration': json['duration'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
    };
}
export function MosaicDefinitionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'duration': value.duration,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
    };
}
