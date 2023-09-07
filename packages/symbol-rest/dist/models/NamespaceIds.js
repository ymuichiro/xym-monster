import { exists } from '../runtime';
export function instanceOfNamespaceIds(value) {
    let isInstance = true;
    return isInstance;
}
export function NamespaceIdsFromJSON(json) {
    return NamespaceIdsFromJSONTyped(json, false);
}
export function NamespaceIdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'namespaceIds': !exists(json, 'namespaceIds') ? undefined : json['namespaceIds'],
    };
}
export function NamespaceIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'namespaceIds': value.namespaceIds,
    };
}
