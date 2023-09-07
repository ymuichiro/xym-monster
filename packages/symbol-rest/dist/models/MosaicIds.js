import { exists } from '../runtime';
export function instanceOfMosaicIds(value) {
    let isInstance = true;
    return isInstance;
}
export function MosaicIdsFromJSON(json) {
    return MosaicIdsFromJSONTyped(json, false);
}
export function MosaicIdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicIds': !exists(json, 'mosaicIds') ? undefined : json['mosaicIds'],
    };
}
export function MosaicIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicIds': value.mosaicIds,
    };
}
