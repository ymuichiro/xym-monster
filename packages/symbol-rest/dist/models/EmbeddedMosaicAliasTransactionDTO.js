import { AliasActionEnumFromJSON, AliasActionEnumToJSON, } from './AliasActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedMosaicAliasTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
export function EmbeddedMosaicAliasTransactionDTOFromJSON(json) {
    return EmbeddedMosaicAliasTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedMosaicAliasTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}
export function EmbeddedMosaicAliasTransactionDTOToJSON(value) {
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
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}
