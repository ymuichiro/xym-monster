export function instanceOfSourceDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "primaryId" in value;
    isInstance = isInstance && "secondaryId" in value;
    return isInstance;
}
export function SourceDTOFromJSON(json) {
    return SourceDTOFromJSONTyped(json, false);
}
export function SourceDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'primaryId': json['primaryId'],
        'secondaryId': json['secondaryId'],
    };
}
export function SourceDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'primaryId': value.primaryId,
        'secondaryId': value.secondaryId,
    };
}
