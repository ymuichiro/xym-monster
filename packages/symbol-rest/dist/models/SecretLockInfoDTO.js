import { SecretLockEntryDTOFromJSON, SecretLockEntryDTOToJSON, } from './SecretLockEntryDTO';
export function instanceOfSecretLockInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "lock" in value;
    return isInstance;
}
export function SecretLockInfoDTOFromJSON(json) {
    return SecretLockInfoDTOFromJSONTyped(json, false);
}
export function SecretLockInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'lock': SecretLockEntryDTOFromJSON(json['lock']),
    };
}
export function SecretLockInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'lock': SecretLockEntryDTOToJSON(value.lock),
    };
}
