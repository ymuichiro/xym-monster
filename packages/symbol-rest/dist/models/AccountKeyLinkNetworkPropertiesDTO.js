import { exists } from '../runtime';
export function instanceOfAccountKeyLinkNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function AccountKeyLinkNetworkPropertiesDTOFromJSON(json) {
    return AccountKeyLinkNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function AccountKeyLinkNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dummy': !exists(json, 'dummy') ? undefined : json['dummy'],
    };
}
export function AccountKeyLinkNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dummy': value.dummy,
    };
}
