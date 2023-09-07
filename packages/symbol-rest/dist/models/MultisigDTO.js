export function instanceOfMultisigDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "accountAddress" in value;
    isInstance = isInstance && "minApproval" in value;
    isInstance = isInstance && "minRemoval" in value;
    isInstance = isInstance && "cosignatoryAddresses" in value;
    isInstance = isInstance && "multisigAddresses" in value;
    return isInstance;
}
export function MultisigDTOFromJSON(json) {
    return MultisigDTOFromJSONTyped(json, false);
}
export function MultisigDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'accountAddress': json['accountAddress'],
        'minApproval': json['minApproval'],
        'minRemoval': json['minRemoval'],
        'cosignatoryAddresses': json['cosignatoryAddresses'],
        'multisigAddresses': json['multisigAddresses'],
    };
}
export function MultisigDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'accountAddress': value.accountAddress,
        'minApproval': value.minApproval,
        'minRemoval': value.minRemoval,
        'cosignatoryAddresses': value.cosignatoryAddresses,
        'multisigAddresses': value.multisigAddresses,
    };
}
