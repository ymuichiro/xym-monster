export function instanceOfTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    return isInstance;
}
export function TransactionBodyDTOFromJSON(json) {
    return TransactionBodyDTOFromJSONTyped(json, false);
}
export function TransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
    };
}
export function TransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxFee': value.maxFee,
        'deadline': value.deadline,
    };
}
