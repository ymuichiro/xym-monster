import { MosaicDTOFromJSON, MosaicDTOToJSON, } from './MosaicDTO';
export function instanceOfMosaicInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mosaic" in value;
    return isInstance;
}
export function MosaicInfoDTOFromJSON(json) {
    return MosaicInfoDTOFromJSONTyped(json, false);
}
export function MosaicInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'mosaic': MosaicDTOFromJSON(json['mosaic']),
    };
}
export function MosaicInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'mosaic': MosaicDTOToJSON(value.mosaic),
    };
}
