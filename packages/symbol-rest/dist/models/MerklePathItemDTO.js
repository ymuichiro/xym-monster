import { exists } from '../runtime';
import { PositionEnumFromJSON, PositionEnumToJSON, } from './PositionEnum';
export function instanceOfMerklePathItemDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MerklePathItemDTOFromJSON(json) {
    return MerklePathItemDTOFromJSONTyped(json, false);
}
export function MerklePathItemDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'position': !exists(json, 'position') ? undefined : PositionEnumFromJSON(json['position']),
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}
export function MerklePathItemDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'position': PositionEnumToJSON(value.position),
        'hash': value.hash,
    };
}
