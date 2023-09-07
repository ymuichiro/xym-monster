import { MerkleStateInfoDTOTreeInnerFromJSON, MerkleStateInfoDTOTreeInnerToJSON, } from './MerkleStateInfoDTOTreeInner';
export function instanceOfMerkleStateInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "raw" in value;
    isInstance = isInstance && "tree" in value;
    return isInstance;
}
export function MerkleStateInfoDTOFromJSON(json) {
    return MerkleStateInfoDTOFromJSONTyped(json, false);
}
export function MerkleStateInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'raw': json['raw'],
        'tree': (json['tree'].map(MerkleStateInfoDTOTreeInnerFromJSON)),
    };
}
export function MerkleStateInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'raw': value.raw,
        'tree': (value.tree.map(MerkleStateInfoDTOTreeInnerToJSON)),
    };
}
