export const MetadataTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
};
export function MetadataTypeEnumFromJSON(json) {
    return MetadataTypeEnumFromJSONTyped(json, false);
}
export function MetadataTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function MetadataTypeEnumToJSON(value) {
    return value;
}
