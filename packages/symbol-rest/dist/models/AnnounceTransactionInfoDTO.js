export function instanceOfAnnounceTransactionInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
export function AnnounceTransactionInfoDTOFromJSON(json) {
    return AnnounceTransactionInfoDTOFromJSONTyped(json, false);
}
export function AnnounceTransactionInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': json['message'],
    };
}
export function AnnounceTransactionInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}
