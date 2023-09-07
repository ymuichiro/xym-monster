import { MosaicSupplyChangeActionEnumFromJSON, MosaicSupplyChangeActionEnumToJSON, } from './MosaicSupplyChangeActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedMosaicSupplyChangeTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    return isInstance;
}
export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSON(json) {
    return EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}
export function EmbeddedMosaicSupplyChangeTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}
