import { ParentPublicKeySignaturePairFromJSON, ParentPublicKeySignaturePairToJSON, } from './ParentPublicKeySignaturePair';
export function instanceOfBmTreeSignature(value) {
    let isInstance = true;
    isInstance = isInstance && "root" in value;
    isInstance = isInstance && "bottom" in value;
    return isInstance;
}
export function BmTreeSignatureFromJSON(json) {
    return BmTreeSignatureFromJSONTyped(json, false);
}
export function BmTreeSignatureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'root': ParentPublicKeySignaturePairFromJSON(json['root']),
        'bottom': ParentPublicKeySignaturePairFromJSON(json['bottom']),
    };
}
export function BmTreeSignatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'root': ParentPublicKeySignaturePairToJSON(value.root),
        'bottom': ParentPublicKeySignaturePairToJSON(value.bottom),
    };
}
