export function instanceOfNetworkTypeDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    return isInstance;
}
export function NetworkTypeDTOFromJSON(json) {
    return NetworkTypeDTOFromJSONTyped(json, false);
}
export function NetworkTypeDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'],
    };
}
export function NetworkTypeDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'description': value.description,
    };
}
