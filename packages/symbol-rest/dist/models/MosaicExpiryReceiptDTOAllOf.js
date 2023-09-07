export function instanceOfMosaicExpiryReceiptDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "artifactId" in value;
    return isInstance;
}
export function MosaicExpiryReceiptDTOAllOfFromJSON(json) {
    return MosaicExpiryReceiptDTOAllOfFromJSONTyped(json, false);
}
export function MosaicExpiryReceiptDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'artifactId': json['artifactId'],
    };
}
export function MosaicExpiryReceiptDTOAllOfToJSON(value) {
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
