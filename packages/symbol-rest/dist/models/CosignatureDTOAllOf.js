export function instanceOfCosignatureDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    return isInstance;
}
export function CosignatureDTOAllOfFromJSON(json) {
    return CosignatureDTOAllOfFromJSONTyped(json, false);
}
export function CosignatureDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'signerPublicKey': json['signerPublicKey'],
    };
}
export function CosignatureDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'signerPublicKey': value.signerPublicKey,
    };
}
