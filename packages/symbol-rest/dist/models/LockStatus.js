export const LockStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1
};
export function LockStatusFromJSON(json) {
    return LockStatusFromJSONTyped(json, false);
}
export function LockStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function LockStatusToJSON(value) {
    return value;
}
