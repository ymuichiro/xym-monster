import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
export function instanceOfVotingKeyLinkTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
export function VotingKeyLinkTransactionBodyDTOFromJSON(json) {
    return VotingKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}
export function VotingKeyLinkTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function VotingKeyLinkTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}
