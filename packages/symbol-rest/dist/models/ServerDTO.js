import { DeploymentDTOFromJSON, DeploymentDTOToJSON, } from './DeploymentDTO';
export function instanceOfServerDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restVersion" in value;
    isInstance = isInstance && "sdkVersion" in value;
    isInstance = isInstance && "deployment" in value;
    return isInstance;
}
export function ServerDTOFromJSON(json) {
    return ServerDTOFromJSONTyped(json, false);
}
export function ServerDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'restVersion': json['restVersion'],
        'sdkVersion': json['sdkVersion'],
        'deployment': DeploymentDTOFromJSON(json['deployment']),
    };
}
export function ServerDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'restVersion': value.restVersion,
        'sdkVersion': value.sdkVersion,
        'deployment': DeploymentDTOToJSON(value.deployment),
    };
}
