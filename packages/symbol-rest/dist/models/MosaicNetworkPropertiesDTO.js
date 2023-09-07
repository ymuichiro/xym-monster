import { exists } from '../runtime';
export function instanceOfMosaicNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MosaicNetworkPropertiesDTOFromJSON(json) {
    return MosaicNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MosaicNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMosaicsPerAccount': !exists(json, 'maxMosaicsPerAccount') ? undefined : json['maxMosaicsPerAccount'],
        'maxMosaicDuration': !exists(json, 'maxMosaicDuration') ? undefined : json['maxMosaicDuration'],
        'maxMosaicDivisibility': !exists(json, 'maxMosaicDivisibility') ? undefined : json['maxMosaicDivisibility'],
        'mosaicRentalFeeSinkAddress': !exists(json, 'mosaicRentalFeeSinkAddress') ? undefined : json['mosaicRentalFeeSinkAddress'],
        'mosaicRentalFee': !exists(json, 'mosaicRentalFee') ? undefined : json['mosaicRentalFee'],
    };
}
export function MosaicNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMosaicsPerAccount': value.maxMosaicsPerAccount,
        'maxMosaicDuration': value.maxMosaicDuration,
        'maxMosaicDivisibility': value.maxMosaicDivisibility,
        'mosaicRentalFeeSinkAddress': value.mosaicRentalFeeSinkAddress,
        'mosaicRentalFee': value.mosaicRentalFee,
    };
}
