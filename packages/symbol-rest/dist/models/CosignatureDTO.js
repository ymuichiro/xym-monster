export function instanceOfCosignatureDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    return isInstance;
}
export function CosignatureDTOFromJSON(json) {
    return CosignatureDTOFromJSONTyped(json, false);
}
export function CosignatureDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signature': json['signature'],
        'version': json['version'],
        'signerPublicKey': json['signerPublicKey'],
    };
}
export function CosignatureDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signature': value.signature,
        'version': value.version,
        'signerPublicKey': value.signerPublicKey,
    };
}
