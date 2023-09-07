import { LockStatusFromJSON, LockStatusToJSON, } from './LockStatus';
export function instanceOfHashLockEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "ownerAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "endHeight" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "hash" in value;
    return isInstance;
}
export function HashLockEntryDTOFromJSON(json) {
    return HashLockEntryDTOFromJSONTyped(json, false);
}
export function HashLockEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'ownerAddress': json['ownerAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'endHeight': json['endHeight'],
        'status': LockStatusFromJSON(json['status']),
        'hash': json['hash'],
    };
}
export function HashLockEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'ownerAddress': value.ownerAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'endHeight': value.endHeight,
        'status': LockStatusToJSON(value.status),
        'hash': value.hash,
    };
}
