import { exists } from '../runtime';
export function instanceOfTransferNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function TransferNetworkPropertiesDTOFromJSON(json) {
    return TransferNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function TransferNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMessageSize': !exists(json, 'maxMessageSize') ? undefined : json['maxMessageSize'],
    };
}
export function TransferNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMessageSize': value.maxMessageSize,
    };
}
