import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedMosaicDefinitionTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    return isInstance;
}
export function EmbeddedMosaicDefinitionTransactionDTOFromJSON(json) {
    return EmbeddedMosaicDefinitionTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicDefinitionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'id': json['id'],
        'duration': json['duration'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
    };
}
export function EmbeddedMosaicDefinitionTransactionDTOToJSON(value) {
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
        'id': value.id,
        'duration': value.duration,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
    };
}
