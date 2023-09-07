import { BmTreeSignatureFromJSON, BmTreeSignatureToJSON, } from './BmTreeSignature';
import { StageEnumFromJSON, StageEnumToJSON, } from './StageEnum';
export function instanceOfMessageGroup(value) {
    let isInstance = true;
    isInstance = isInstance && "stage" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hashes" in value;
    isInstance = isInstance && "signatures" in value;
    return isInstance;
}
export function MessageGroupFromJSON(json) {
    return MessageGroupFromJSONTyped(json, false);
}
export function MessageGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stage': StageEnumFromJSON(json['stage']),
        'height': json['height'],
        'hashes': json['hashes'],
        'signatures': (json['signatures'].map(BmTreeSignatureFromJSON)),
    };
}
export function MessageGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stage': StageEnumToJSON(value.stage),
        'height': value.height,
        'hashes': value.hashes,
        'signatures': (value.signatures.map(BmTreeSignatureToJSON)),
    };
}
