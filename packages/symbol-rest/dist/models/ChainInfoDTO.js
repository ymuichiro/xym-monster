import { FinalizedBlockDTOFromJSON, FinalizedBlockDTOToJSON, } from './FinalizedBlockDTO';
export function instanceOfChainInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "scoreHigh" in value;
    isInstance = isInstance && "scoreLow" in value;
    isInstance = isInstance && "latestFinalizedBlock" in value;
    return isInstance;
}
export function ChainInfoDTOFromJSON(json) {
    return ChainInfoDTOFromJSONTyped(json, false);
}
export function ChainInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'scoreHigh': json['scoreHigh'],
        'scoreLow': json['scoreLow'],
        'latestFinalizedBlock': FinalizedBlockDTOFromJSON(json['latestFinalizedBlock']),
    };
}
export function ChainInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'scoreHigh': value.scoreHigh,
        'scoreLow': value.scoreLow,
        'latestFinalizedBlock': FinalizedBlockDTOToJSON(value.latestFinalizedBlock),
    };
}
