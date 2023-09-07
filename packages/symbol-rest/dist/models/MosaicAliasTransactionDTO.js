import { AliasActionEnumFromJSON, AliasActionEnumToJSON, } from './AliasActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfMosaicAliasTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
export function MosaicAliasTransactionDTOFromJSON(json) {
    return MosaicAliasTransactionDTOFromJSONTyped(json, false);
}
export function MosaicAliasTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}
export function MosaicAliasTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}
