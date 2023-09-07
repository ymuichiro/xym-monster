export function instanceOfStatementMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    return isInstance;
}
export function StatementMetaDTOFromJSON(json) {
    return StatementMetaDTOFromJSONTyped(json, false);
}
export function StatementMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timestamp': json['timestamp'],
    };
}
export function StatementMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timestamp': value.timestamp,
    };
}
