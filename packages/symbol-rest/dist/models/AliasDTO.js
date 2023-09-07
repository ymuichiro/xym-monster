import { exists } from '../runtime';
import { AliasTypeEnumFromJSON, AliasTypeEnumToJSON, } from './AliasTypeEnum';
export function instanceOfAliasDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function AliasDTOFromJSON(json) {
    return AliasDTOFromJSONTyped(json, false);
}
export function AliasDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': AliasTypeEnumFromJSON(json['type']),
        'mosaicId': !exists(json, 'mosaicId') ? undefined : json['mosaicId'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}
export function AliasDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': AliasTypeEnumToJSON(value.type),
        'mosaicId': value.mosaicId,
        'address': value.address,
    };
}
