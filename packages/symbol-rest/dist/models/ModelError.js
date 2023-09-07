export function instanceOfModelError(value) {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
export function ModelErrorFromJSON(json) {
    return ModelErrorFromJSONTyped(json, false);
}
export function ModelErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'message': json['message'],
    };
}
export function ModelErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'message': value.message,
    };
}
