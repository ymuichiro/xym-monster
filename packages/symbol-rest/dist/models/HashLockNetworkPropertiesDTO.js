import { exists } from '../runtime';
export function instanceOfHashLockNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function HashLockNetworkPropertiesDTOFromJSON(json) {
    return HashLockNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function HashLockNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lockedFundsPerAggregate': !exists(json, 'lockedFundsPerAggregate') ? undefined : json['lockedFundsPerAggregate'],
        'maxHashLockDuration': !exists(json, 'maxHashLockDuration') ? undefined : json['maxHashLockDuration'],
    };
}
export function HashLockNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lockedFundsPerAggregate': value.lockedFundsPerAggregate,
        'maxHashLockDuration': value.maxHashLockDuration,
    };
}
