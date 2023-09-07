import { exists } from '../runtime';
import { AccountLinkPublicKeyDTOFromJSON, AccountLinkPublicKeyDTOToJSON, } from './AccountLinkPublicKeyDTO';
import { AccountLinkVotingKeysDTOFromJSON, AccountLinkVotingKeysDTOToJSON, } from './AccountLinkVotingKeysDTO';
export function instanceOfSupplementalPublicKeysDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function SupplementalPublicKeysDTOFromJSON(json) {
    return SupplementalPublicKeysDTOFromJSONTyped(json, false);
}
export function SupplementalPublicKeysDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linked': !exists(json, 'linked') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['linked']),
        'node': !exists(json, 'node') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['node']),
        'vrf': !exists(json, 'vrf') ? undefined : AccountLinkPublicKeyDTOFromJSON(json['vrf']),
        'voting': !exists(json, 'voting') ? undefined : AccountLinkVotingKeysDTOFromJSON(json['voting']),
    };
}
export function SupplementalPublicKeysDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linked': AccountLinkPublicKeyDTOToJSON(value.linked),
        'node': AccountLinkPublicKeyDTOToJSON(value.node),
        'vrf': AccountLinkPublicKeyDTOToJSON(value.vrf),
        'voting': AccountLinkVotingKeysDTOToJSON(value.voting),
    };
}
