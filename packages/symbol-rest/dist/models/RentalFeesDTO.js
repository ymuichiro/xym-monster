export function instanceOfRentalFeesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "effectiveRootNamespaceRentalFeePerBlock" in value;
    isInstance = isInstance && "effectiveChildNamespaceRentalFee" in value;
    isInstance = isInstance && "effectiveMosaicRentalFee" in value;
    return isInstance;
}
export function RentalFeesDTOFromJSON(json) {
    return RentalFeesDTOFromJSONTyped(json, false);
}
export function RentalFeesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'effectiveRootNamespaceRentalFeePerBlock': json['effectiveRootNamespaceRentalFeePerBlock'],
        'effectiveChildNamespaceRentalFee': json['effectiveChildNamespaceRentalFee'],
        'effectiveMosaicRentalFee': json['effectiveMosaicRentalFee'],
    };
}
export function RentalFeesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'effectiveRootNamespaceRentalFeePerBlock': value.effectiveRootNamespaceRentalFeePerBlock,
        'effectiveChildNamespaceRentalFee': value.effectiveChildNamespaceRentalFee,
        'effectiveMosaicRentalFee': value.effectiveMosaicRentalFee,
    };
}
