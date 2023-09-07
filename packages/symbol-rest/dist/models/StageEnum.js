export const StageEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
};
export function StageEnumFromJSON(json) {
    return StageEnumFromJSONTyped(json, false);
}
export function StageEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function StageEnumToJSON(value) {
    return value;
}
