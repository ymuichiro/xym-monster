import { exists } from '../runtime';
import { MerklePathItemDTOFromJSON, MerklePathItemDTOToJSON, } from './MerklePathItemDTO';
export function instanceOfMerkleProofInfoDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MerkleProofInfoDTOFromJSON(json) {
    return MerkleProofInfoDTOFromJSONTyped(json, false);
}
export function MerkleProofInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'merklePath': !exists(json, 'merklePath') ? undefined : (json['merklePath'].map(MerklePathItemDTOFromJSON)),
    };
}
export function MerkleProofInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'merklePath': value.merklePath === undefined ? undefined : (value.merklePath.map(MerklePathItemDTOToJSON)),
    };
}
