import { exists } from '../runtime';
export function instanceOfCommunicationTimestampsDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function CommunicationTimestampsDTOFromJSON(json) {
    return CommunicationTimestampsDTOFromJSONTyped(json, false);
}
export function CommunicationTimestampsDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sendTimestamp': !exists(json, 'sendTimestamp') ? undefined : json['sendTimestamp'],
        'receiveTimestamp': !exists(json, 'receiveTimestamp') ? undefined : json['receiveTimestamp'],
    };
}
export function CommunicationTimestampsDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sendTimestamp': value.sendTimestamp,
        'receiveTimestamp': value.receiveTimestamp,
    };
}
