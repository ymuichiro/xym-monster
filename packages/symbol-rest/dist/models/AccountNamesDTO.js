export function instanceOfAccountNamesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "names" in value;
    return isInstance;
}
export function AccountNamesDTOFromJSON(json) {
    return AccountNamesDTOFromJSONTyped(json, false);
}
export function AccountNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'names': json['names'],
    };
}
export function AccountNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'names': value.names,
    };
}
