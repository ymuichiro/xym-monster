export const PositionEnum = {
    Left: 'left',
    Right: 'right'
};
export function PositionEnumFromJSON(json) {
    return PositionEnumFromJSONTyped(json, false);
}
export function PositionEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function PositionEnumToJSON(value) {
    return value;
}
