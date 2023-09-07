import { exists } from '../runtime';
export function instanceOfNodeKeyLinkNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function NodeKeyLinkNetworkPropertiesDTOFromJSON(json) {
    return NodeKeyLinkNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function NodeKeyLinkNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dummy': !exists(json, 'dummy') ? undefined : json['dummy'],
    };
}
export function NodeKeyLinkNetworkPropertiesDTOToJSON(value) {
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
