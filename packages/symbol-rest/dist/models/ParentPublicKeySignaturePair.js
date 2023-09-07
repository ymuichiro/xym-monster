export function instanceOfParentPublicKeySignaturePair(value) {
    let isInstance = true;
    isInstance = isInstance && "parentPublicKey" in value;
    isInstance = isInstance && "signature" in value;
    return isInstance;
}
export function ParentPublicKeySignaturePairFromJSON(json) {
    return ParentPublicKeySignaturePairFromJSONTyped(json, false);
}
export function ParentPublicKeySignaturePairFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parentPublicKey': json['parentPublicKey'],
        'signature': json['signature'],
    };
}
export function ParentPublicKeySignaturePairToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parentPublicKey': value.parentPublicKey,
        'signature': value.signature,
    };
}
