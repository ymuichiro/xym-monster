export function instanceOfActivityBucketDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "startHeight" in value;
    isInstance = isInstance && "totalFeesPaid" in value;
    isInstance = isInstance && "beneficiaryCount" in value;
    isInstance = isInstance && "rawScore" in value;
    return isInstance;
}
export function ActivityBucketDTOFromJSON(json) {
    return ActivityBucketDTOFromJSONTyped(json, false);
}
export function ActivityBucketDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'startHeight': json['startHeight'],
        'totalFeesPaid': json['totalFeesPaid'],
        'beneficiaryCount': json['beneficiaryCount'],
        'rawScore': json['rawScore'],
    };
}
export function ActivityBucketDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'startHeight': value.startHeight,
        'totalFeesPaid': value.totalFeesPaid,
        'beneficiaryCount': value.beneficiaryCount,
        'rawScore': value.rawScore,
    };
}
