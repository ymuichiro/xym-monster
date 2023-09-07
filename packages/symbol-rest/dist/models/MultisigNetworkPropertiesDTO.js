import { exists } from '../runtime';
export function instanceOfMultisigNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MultisigNetworkPropertiesDTOFromJSON(json) {
    return MultisigNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MultisigNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMultisigDepth': !exists(json, 'maxMultisigDepth') ? undefined : json['maxMultisigDepth'],
        'maxCosignatoriesPerAccount': !exists(json, 'maxCosignatoriesPerAccount') ? undefined : json['maxCosignatoriesPerAccount'],
        'maxCosignedAccountsPerAccount': !exists(json, 'maxCosignedAccountsPerAccount') ? undefined : json['maxCosignedAccountsPerAccount'],
    };
}
export function MultisigNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMultisigDepth': value.maxMultisigDepth,
        'maxCosignatoriesPerAccount': value.maxCosignatoriesPerAccount,
        'maxCosignedAccountsPerAccount': value.maxCosignedAccountsPerAccount,
    };
}
