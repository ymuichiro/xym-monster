import { HashLockEntryDTOFromJSON, HashLockEntryDTOToJSON, } from './HashLockEntryDTO';
export function instanceOfHashLockInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "lock" in value;
    return isInstance;
}
export function HashLockInfoDTOFromJSON(json) {
    return HashLockInfoDTOFromJSONTyped(json, false);
}
export function HashLockInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'lock': HashLockEntryDTOFromJSON(json['lock']),
    };
}
export function HashLockInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'lock': HashLockEntryDTOToJSON(value.lock),
    };
}
