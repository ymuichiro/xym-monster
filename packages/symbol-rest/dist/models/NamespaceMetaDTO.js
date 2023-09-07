export function instanceOfNamespaceMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "index" in value;
    return isInstance;
}
export function NamespaceMetaDTOFromJSON(json) {
    return NamespaceMetaDTOFromJSONTyped(json, false);
}
export function NamespaceMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': json['active'],
        'index': json['index'],
    };
}
export function NamespaceMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'index': value.index,
    };
}
