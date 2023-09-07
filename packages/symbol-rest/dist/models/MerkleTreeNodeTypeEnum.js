export const MerkleTreeNodeTypeEnum = {
    NUMBER_0: 0,
    NUMBER_255: 255
};
export function MerkleTreeNodeTypeEnumFromJSON(json) {
    return MerkleTreeNodeTypeEnumFromJSONTyped(json, false);
}
export function MerkleTreeNodeTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function MerkleTreeNodeTypeEnumToJSON(value) {
    return value;
}
