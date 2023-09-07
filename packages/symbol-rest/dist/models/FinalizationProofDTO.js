import { MessageGroupFromJSON, MessageGroupToJSON, } from './MessageGroup';
export function instanceOfFinalizationProofDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "finalizationEpoch" in value;
    isInstance = isInstance && "finalizationPoint" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "messageGroups" in value;
    return isInstance;
}
export function FinalizationProofDTOFromJSON(json) {
    return FinalizationProofDTOFromJSONTyped(json, false);
}
export function FinalizationProofDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'finalizationEpoch': json['finalizationEpoch'],
        'finalizationPoint': json['finalizationPoint'],
        'height': json['height'],
        'hash': json['hash'],
        'messageGroups': (json['messageGroups'].map(MessageGroupFromJSON)),
    };
}
export function FinalizationProofDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'finalizationEpoch': value.finalizationEpoch,
        'finalizationPoint': value.finalizationPoint,
        'height': value.height,
        'hash': value.hash,
        'messageGroups': (value.messageGroups.map(MessageGroupToJSON)),
    };
}
