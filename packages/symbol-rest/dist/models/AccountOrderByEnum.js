export const AccountOrderByEnum = {
    Id: 'id',
    Balance: 'balance'
};
export function AccountOrderByEnumFromJSON(json) {
    return AccountOrderByEnumFromJSONTyped(json, false);
}
export function AccountOrderByEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function AccountOrderByEnumToJSON(value) {
    return value;
}
