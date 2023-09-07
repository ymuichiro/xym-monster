export function instanceOfMultisigAccountModificationTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;
    return isInstance;
}
export function MultisigAccountModificationTransactionBodyDTOFromJSON(json) {
    return MultisigAccountModificationTransactionBodyDTOFromJSONTyped(json, false);
}
export function MultisigAccountModificationTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
    };
}
export function MultisigAccountModificationTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
    };
}
