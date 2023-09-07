import { exists } from '../runtime';
export function instanceOfVrfKeyLinkNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function VrfKeyLinkNetworkPropertiesDTOFromJSON(json) {
    return VrfKeyLinkNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function VrfKeyLinkNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dummy': !exists(json, 'dummy') ? undefined : json['dummy'],
    };
}
export function VrfKeyLinkNetworkPropertiesDTOToJSON(value) {
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
