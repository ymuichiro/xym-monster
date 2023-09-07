import { exists } from '../runtime';
export function instanceOfMosaicRestrictionNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function MosaicRestrictionNetworkPropertiesDTOFromJSON(json) {
    return MosaicRestrictionNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function MosaicRestrictionNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxMosaicRestrictionValues': !exists(json, 'maxMosaicRestrictionValues') ? undefined : json['maxMosaicRestrictionValues'],
    };
}
export function MosaicRestrictionNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxMosaicRestrictionValues': value.maxMosaicRestrictionValues,
    };
}
