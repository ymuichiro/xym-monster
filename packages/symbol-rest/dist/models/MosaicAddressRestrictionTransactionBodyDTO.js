export function instanceOfMosaicAddressRestrictionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "targetAddress" in value;
    return isInstance;
}
export function MosaicAddressRestrictionTransactionBodyDTOFromJSON(json) {
    return MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'targetAddress': json['targetAddress'],
    };
}
export function MosaicAddressRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'targetAddress': value.targetAddress,
    };
}
