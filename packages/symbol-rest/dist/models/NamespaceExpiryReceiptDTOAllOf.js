export function instanceOfNamespaceExpiryReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
export function NamespaceExpiryReceiptDTOAllOfFromJSON(json) {
    return NamespaceExpiryReceiptDTOAllOfFromJSONTyped(json, false);
}
export function NamespaceExpiryReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'artifactId': json['artifactId'],
    };
}
export function NamespaceExpiryReceiptDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'artifactId': value.artifactId,
    };
}
