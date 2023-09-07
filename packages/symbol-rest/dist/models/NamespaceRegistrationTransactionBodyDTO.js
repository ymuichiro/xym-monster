import { exists } from '../runtime';
import { NamespaceRegistrationTypeEnumFromJSON, NamespaceRegistrationTypeEnumToJSON, } from './NamespaceRegistrationTypeEnum';
export function instanceOfNamespaceRegistrationTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function NamespaceRegistrationTransactionBodyDTOFromJSON(json) {
    return NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json, false);
}
export function NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'name': json['name'],
    };
}
export function NamespaceRegistrationTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'name': value.name,
    };
}
