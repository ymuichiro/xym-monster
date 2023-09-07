import { ServerDTOFromJSON, ServerDTOToJSON, } from './ServerDTO';
export function instanceOfServerInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "serverInfo" in value;
    return isInstance;
}
export function ServerInfoDTOFromJSON(json) {
    return ServerInfoDTOFromJSONTyped(json, false);
}
export function ServerInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'serverInfo': ServerDTOFromJSON(json['serverInfo']),
    };
}
export function ServerInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'serverInfo': ServerDTOToJSON(value.serverInfo),
    };
}
