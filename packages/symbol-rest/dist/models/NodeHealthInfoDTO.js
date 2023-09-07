import { NodeHealthDTOFromJSON, NodeHealthDTOToJSON, } from './NodeHealthDTO';
export function instanceOfNodeHealthInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
export function NodeHealthInfoDTOFromJSON(json) {
    return NodeHealthInfoDTOFromJSONTyped(json, false);
}
export function NodeHealthInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': NodeHealthDTOFromJSON(json['status']),
    };
}
export function NodeHealthInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': NodeHealthDTOToJSON(value.status),
    };
}
