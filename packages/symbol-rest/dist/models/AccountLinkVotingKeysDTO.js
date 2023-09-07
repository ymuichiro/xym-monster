import { AccountLinkVotingKeyDTOFromJSON, AccountLinkVotingKeyDTOToJSON, } from './AccountLinkVotingKeyDTO';
export function instanceOfAccountLinkVotingKeysDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "publicKeys" in value;
    return isInstance;
}
export function AccountLinkVotingKeysDTOFromJSON(json) {
    return AccountLinkVotingKeysDTOFromJSONTyped(json, false);
}
export function AccountLinkVotingKeysDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKeys': (json['publicKeys'].map(AccountLinkVotingKeyDTOFromJSON)),
    };
}
export function AccountLinkVotingKeysDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKeys': (value.publicKeys.map(AccountLinkVotingKeyDTOToJSON)),
    };
}
