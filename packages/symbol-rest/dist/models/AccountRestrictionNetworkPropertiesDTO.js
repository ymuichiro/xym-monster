import { exists } from '../runtime';
export function instanceOfAccountRestrictionNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function AccountRestrictionNetworkPropertiesDTOFromJSON(json) {
    return AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function AccountRestrictionNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxAccountRestrictionValues': !exists(json, 'maxAccountRestrictionValues') ? undefined : json['maxAccountRestrictionValues'],
    };
}
export function AccountRestrictionNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxAccountRestrictionValues': value.maxAccountRestrictionValues,
    };
}
