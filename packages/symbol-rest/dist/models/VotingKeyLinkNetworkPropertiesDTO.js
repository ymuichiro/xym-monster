import { exists } from '../runtime';
export function instanceOfVotingKeyLinkNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function VotingKeyLinkNetworkPropertiesDTOFromJSON(json) {
    return VotingKeyLinkNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function VotingKeyLinkNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dummy': !exists(json, 'dummy') ? undefined : json['dummy'],
    };
}
export function VotingKeyLinkNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dummy': value.dummy,
    };
}
