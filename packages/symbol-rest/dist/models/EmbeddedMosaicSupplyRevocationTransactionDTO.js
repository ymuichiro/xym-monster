import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedMosaicSupplyRevocationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON(json) {
    return EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'sourceAddress': json['sourceAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}
export function EmbeddedMosaicSupplyRevocationTransactionDTOToJSON(value) {
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
        'sourceAddress': value.sourceAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}
