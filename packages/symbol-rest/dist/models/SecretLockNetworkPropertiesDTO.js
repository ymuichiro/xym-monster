import { exists } from '../runtime';
export function instanceOfSecretLockNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function SecretLockNetworkPropertiesDTOFromJSON(json) {
    return SecretLockNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function SecretLockNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxSecretLockDuration': !exists(json, 'maxSecretLockDuration') ? undefined : json['maxSecretLockDuration'],
        'minProofSize': !exists(json, 'minProofSize') ? undefined : json['minProofSize'],
        'maxProofSize': !exists(json, 'maxProofSize') ? undefined : json['maxProofSize'],
    };
}
export function SecretLockNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxSecretLockDuration': value.maxSecretLockDuration,
        'minProofSize': value.minProofSize,
        'maxProofSize': value.maxProofSize,
    };
}
