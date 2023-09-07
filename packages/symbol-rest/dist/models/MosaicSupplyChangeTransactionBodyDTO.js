import { MosaicSupplyChangeActionEnumFromJSON, MosaicSupplyChangeActionEnumToJSON, } from './MosaicSupplyChangeActionEnum';
export function instanceOfMosaicSupplyChangeTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    return isInstance;
}
export function MosaicSupplyChangeTransactionBodyDTOFromJSON(json) {
    return MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}
export function MosaicSupplyChangeTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}
