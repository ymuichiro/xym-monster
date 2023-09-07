export const BlockOrderByEnum = {
    Id: 'id',
    Height: 'height'
};
export function BlockOrderByEnumFromJSON(json) {
    return BlockOrderByEnumFromJSONTyped(json, false);
}
export function BlockOrderByEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function BlockOrderByEnumToJSON(value) {
    return value;
}
