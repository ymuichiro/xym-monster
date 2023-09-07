import { MerkleTreeBranchLinkDTOFromJSON, MerkleTreeBranchLinkDTOToJSON, } from './MerkleTreeBranchLinkDTO';
import { MerkleTreeNodeTypeEnumFromJSON, MerkleTreeNodeTypeEnumToJSON, } from './MerkleTreeNodeTypeEnum';
export function instanceOfMerkleTreeBranchDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "path" in value;
    isInstance = isInstance && "encodedPath" in value;
    isInstance = isInstance && "nibbleCount" in value;
    isInstance = isInstance && "linkMask" in value;
    isInstance = isInstance && "links" in value;
    isInstance = isInstance && "branchHash" in value;
    return isInstance;
}
export function MerkleTreeBranchDTOFromJSON(json) {
    return MerkleTreeBranchDTOFromJSONTyped(json, false);
}
export function MerkleTreeBranchDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MerkleTreeNodeTypeEnumFromJSON(json['type']),
        'path': json['path'],
        'encodedPath': json['encodedPath'],
        'nibbleCount': json['nibbleCount'],
        'linkMask': json['linkMask'],
        'links': (json['links'].map(MerkleTreeBranchLinkDTOFromJSON)),
        'branchHash': json['branchHash'],
    };
}
export function MerkleTreeBranchDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': MerkleTreeNodeTypeEnumToJSON(value.type),
        'path': value.path,
        'encodedPath': value.encodedPath,
        'nibbleCount': value.nibbleCount,
        'linkMask': value.linkMask,
        'links': (value.links.map(MerkleTreeBranchLinkDTOToJSON)),
        'branchHash': value.branchHash,
    };
}
