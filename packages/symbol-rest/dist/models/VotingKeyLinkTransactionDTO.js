import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfVotingKeyLinkTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
export function VotingKeyLinkTransactionDTOFromJSON(json) {
    return VotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}
export function VotingKeyLinkTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function VotingKeyLinkTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}
