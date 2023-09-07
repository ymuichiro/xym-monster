import { exists } from '../runtime';
import { NamespaceRegistrationTypeEnumFromJSON, NamespaceRegistrationTypeEnumToJSON, } from './NamespaceRegistrationTypeEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfNamespaceRegistrationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function NamespaceRegistrationTransactionDTOFromJSON(json) {
    return NamespaceRegistrationTransactionDTOFromJSONTyped(json, false);
}
export function NamespaceRegistrationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'name': json['name'],
    };
}
export function NamespaceRegistrationTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'name': value.name,
    };
}
