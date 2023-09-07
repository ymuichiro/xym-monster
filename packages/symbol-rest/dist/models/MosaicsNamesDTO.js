import { MosaicNamesDTOFromJSON, MosaicNamesDTOToJSON, } from './MosaicNamesDTO';
export function instanceOfMosaicsNamesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicNames" in value;
    return isInstance;
}
export function MosaicsNamesDTOFromJSON(json) {
    return MosaicsNamesDTOFromJSONTyped(json, false);
}
export function MosaicsNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicNames': (json['mosaicNames'].map(MosaicNamesDTOFromJSON)),
    };
}
export function MosaicsNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicNames': (value.mosaicNames.map(MosaicNamesDTOToJSON)),
    };
}
