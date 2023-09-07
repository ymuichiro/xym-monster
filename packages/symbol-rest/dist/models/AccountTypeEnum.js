export const AccountTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
};
export function AccountTypeEnumFromJSON(json) {
    return AccountTypeEnumFromJSONTyped(json, false);
}
export function AccountTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function AccountTypeEnumToJSON(value) {
    return value;
}
