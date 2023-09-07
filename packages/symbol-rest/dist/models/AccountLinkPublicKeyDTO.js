export function instanceOfAccountLinkPublicKeyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    return isInstance;
}
export function AccountLinkPublicKeyDTOFromJSON(json) {
    return AccountLinkPublicKeyDTOFromJSONTyped(json, false);
}
export function AccountLinkPublicKeyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['publicKey'],
    };
}
export function AccountLinkPublicKeyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKey': value.publicKey,
    };
}
