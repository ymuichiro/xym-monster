export function instanceOfFinalizedBlockDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "finalizationEpoch" in value;
    isInstance = isInstance && "finalizationPoint" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    return isInstance;
}
export function FinalizedBlockDTOFromJSON(json) {
    return FinalizedBlockDTOFromJSONTyped(json, false);
}
export function FinalizedBlockDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'finalizationEpoch': json['finalizationEpoch'],
        'finalizationPoint': json['finalizationPoint'],
        'height': json['height'],
        'hash': json['hash'],
    };
}
export function FinalizedBlockDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'finalizationEpoch': value.finalizationEpoch,
        'finalizationPoint': value.finalizationPoint,
        'height': value.height,
        'hash': value.hash,
    };
}
