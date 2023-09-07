import { CommunicationTimestampsDTOFromJSON, CommunicationTimestampsDTOToJSON, } from './CommunicationTimestampsDTO';
export function instanceOfNodeTimeDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "communicationTimestamps" in value;
    return isInstance;
}
export function NodeTimeDTOFromJSON(json) {
    return NodeTimeDTOFromJSONTyped(json, false);
}
export function NodeTimeDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'communicationTimestamps': CommunicationTimestampsDTOFromJSON(json['communicationTimestamps']),
    };
}
export function NodeTimeDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'communicationTimestamps': CommunicationTimestampsDTOToJSON(value.communicationTimestamps),
    };
}
