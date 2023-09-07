import { exists } from '../runtime';
export function instanceOfCosignature(value) {
    let isInstance = true;
    return isInstance;
}
export function CosignatureFromJSON(json) {
    return CosignatureFromJSONTyped(json, false);
}
export function CosignatureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parentHash': !exists(json, 'parentHash') ? undefined : json['parentHash'],
        'signature': !exists(json, 'signature') ? undefined : json['signature'],
        'signerPublicKey': !exists(json, 'signerPublicKey') ? undefined : json['signerPublicKey'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}
export function CosignatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parentHash': value.parentHash,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
    };
}
