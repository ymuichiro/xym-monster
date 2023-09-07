export const TransactionGroupEnum = {
    Unconfirmed: 'unconfirmed',
    Confirmed: 'confirmed',
    Failed: 'failed',
    Partial: 'partial'
};
export function TransactionGroupEnumFromJSON(json) {
    return TransactionGroupEnumFromJSONTyped(json, false);
}
export function TransactionGroupEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function TransactionGroupEnumToJSON(value) {
    return value;
}
