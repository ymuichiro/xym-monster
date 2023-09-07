import { exists } from '../runtime';
export function instanceOfNamespaceNameDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function NamespaceNameDTOFromJSON(json) {
    return NamespaceNameDTOFromJSONTyped(json, false);
}
export function NamespaceNameDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'name': json['name'],
    };
}
export function NamespaceNameDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parentId': value.parentId,
        'id': value.id,
        'name': value.name,
    };
}
