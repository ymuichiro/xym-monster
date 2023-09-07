export const AliasTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
};
export function AliasTypeEnumFromJSON(json) {
    return AliasTypeEnumFromJSONTyped(json, false);
}
export function AliasTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function AliasTypeEnumToJSON(value) {
    return value;
}
