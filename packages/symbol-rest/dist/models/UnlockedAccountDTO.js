export function instanceOfUnlockedAccountDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "unlockedAccount" in value;
    return isInstance;
}
export function UnlockedAccountDTOFromJSON(json) {
    return UnlockedAccountDTOFromJSONTyped(json, false);
}
export function UnlockedAccountDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'unlockedAccount': json['unlockedAccount'],
    };
}
export function UnlockedAccountDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'unlockedAccount': value.unlockedAccount,
    };
}
