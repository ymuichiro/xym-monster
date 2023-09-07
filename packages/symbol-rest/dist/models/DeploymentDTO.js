export function instanceOfDeploymentDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "deploymentTool" in value;
    isInstance = isInstance && "deploymentToolVersion" in value;
    isInstance = isInstance && "lastUpdatedDate" in value;
    return isInstance;
}
export function DeploymentDTOFromJSON(json) {
    return DeploymentDTOFromJSONTyped(json, false);
}
export function DeploymentDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deploymentTool': json['deploymentTool'],
        'deploymentToolVersion': json['deploymentToolVersion'],
        'lastUpdatedDate': json['lastUpdatedDate'],
    };
}
export function DeploymentDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deploymentTool': value.deploymentTool,
        'deploymentToolVersion': value.deploymentToolVersion,
        'lastUpdatedDate': value.lastUpdatedDate,
    };
}
