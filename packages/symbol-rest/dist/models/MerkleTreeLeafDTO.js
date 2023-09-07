import { MerkleTreeNodeTypeEnumFromJSON, MerkleTreeNodeTypeEnumToJSON, } from './MerkleTreeNodeTypeEnum';
export function instanceOfMerkleTreeLeafDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "path" in value;
    isInstance = isInstance && "encodedPath" in value;
    isInstance = isInstance && "nibbleCount" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "leafHash" in value;
    return isInstance;
}
export function MerkleTreeLeafDTOFromJSON(json) {
    return MerkleTreeLeafDTOFromJSONTyped(json, false);
}
export function MerkleTreeLeafDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': MerkleTreeNodeTypeEnumFromJSON(json['type']),
        'path': json['path'],
        'encodedPath': json['encodedPath'],
        'nibbleCount': json['nibbleCount'],
        'value': json['value'],
        'leafHash': json['leafHash'],
    };
}
export function MerkleTreeLeafDTOToJSON(value) {
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
        'value': value.value,
        'leafHash': value.leafHash,
    };
}
