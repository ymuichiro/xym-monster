export const Order = {
    Asc: 'asc',
    Desc: 'desc'
};
export function OrderFromJSON(json) {
    return OrderFromJSONTyped(json, false);
}
export function OrderFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function OrderToJSON(value) {
    return value;
}
