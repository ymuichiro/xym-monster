export const NodeIdentityEqualityStrategy = {
    Host: 'host',
    PublicKey: 'public-key'
};
export function NodeIdentityEqualityStrategyFromJSON(json) {
    return NodeIdentityEqualityStrategyFromJSONTyped(json, false);
}
export function NodeIdentityEqualityStrategyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function NodeIdentityEqualityStrategyToJSON(value) {
    return value;
}
