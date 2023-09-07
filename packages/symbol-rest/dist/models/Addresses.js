import { exists } from '../runtime';
export function instanceOfAddresses(value) {
    let isInstance = true;
    return isInstance;
}
export function AddressesFromJSON(json) {
    return AddressesFromJSONTyped(json, false);
}
export function AddressesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
    };
}
export function AddressesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': value.addresses,
    };
}
