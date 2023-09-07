export function instanceOfAccountLinkVotingKeyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    return isInstance;
}
export function AccountLinkVotingKeyDTOFromJSON(json) {
    return AccountLinkVotingKeyDTOFromJSONTyped(json, false);
}
export function AccountLinkVotingKeyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['publicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
    };
}
export function AccountLinkVotingKeyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKey': value.publicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
    };
}
