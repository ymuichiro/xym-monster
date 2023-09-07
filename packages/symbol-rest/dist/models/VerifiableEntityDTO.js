export function instanceOfVerifiableEntityDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    return isInstance;
}
export function VerifiableEntityDTOFromJSON(json) {
    return VerifiableEntityDTOFromJSONTyped(json, false);
}
export function VerifiableEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signature': json['signature'],
    };
}
export function VerifiableEntityDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signature': value.signature,
    };
}
