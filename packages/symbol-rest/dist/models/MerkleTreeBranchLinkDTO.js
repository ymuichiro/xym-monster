export function instanceOfMerkleTreeBranchLinkDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "bit" in value;
    isInstance = isInstance && "link" in value;
    return isInstance;
}
export function MerkleTreeBranchLinkDTOFromJSON(json) {
    return MerkleTreeBranchLinkDTOFromJSONTyped(json, false);
}
export function MerkleTreeBranchLinkDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bit': json['bit'],
        'link': json['link'],
    };
}
export function MerkleTreeBranchLinkDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bit': value.bit,
        'link': value.link,
    };
}
