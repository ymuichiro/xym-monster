import { NodeStatusEnumFromJSON, NodeStatusEnumToJSON, } from './NodeStatusEnum';
export function instanceOfNodeHealthDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "apiNode" in value;
    isInstance = isInstance && "db" in value;
    return isInstance;
}
export function NodeHealthDTOFromJSON(json) {
    return NodeHealthDTOFromJSONTyped(json, false);
}
export function NodeHealthDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiNode': NodeStatusEnumFromJSON(json['apiNode']),
        'db': NodeStatusEnumFromJSON(json['db']),
    };
}
export function NodeHealthDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiNode': NodeStatusEnumToJSON(value.apiNode),
        'db': NodeStatusEnumToJSON(value.db),
    };
}
