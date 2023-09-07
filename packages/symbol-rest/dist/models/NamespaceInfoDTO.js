import { NamespaceDTOFromJSON, NamespaceDTOToJSON, } from './NamespaceDTO';
import { NamespaceMetaDTOFromJSON, NamespaceMetaDTOToJSON, } from './NamespaceMetaDTO';
export function instanceOfNamespaceInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "namespace" in value;
    return isInstance;
}
export function NamespaceInfoDTOFromJSON(json) {
    return NamespaceInfoDTOFromJSONTyped(json, false);
}
export function NamespaceInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': NamespaceMetaDTOFromJSON(json['meta']),
        'namespace': NamespaceDTOFromJSON(json['namespace']),
    };
}
export function NamespaceInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': NamespaceMetaDTOToJSON(value.meta),
        'namespace': NamespaceDTOToJSON(value.namespace),
    };
}
