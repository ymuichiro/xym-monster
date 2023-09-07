export const NodeStatusEnum = {
    Up: 'up',
    Down: 'down'
};
export function NodeStatusEnumFromJSON(json) {
    return NodeStatusEnumFromJSONTyped(json, false);
}
export function NodeStatusEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function NodeStatusEnumToJSON(value) {
    return value;
}
