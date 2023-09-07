import { exists } from '../runtime';
export function instanceOfAccountIds(value) {
    let isInstance = true;
    return isInstance;
}
export function AccountIdsFromJSON(json) {
    return AccountIdsFromJSONTyped(json, false);
}
export function AccountIdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKeys': !exists(json, 'publicKeys') ? undefined : json['publicKeys'],
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
    };
}
export function AccountIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKeys': value.publicKeys,
        'addresses': value.addresses,
    };
}
