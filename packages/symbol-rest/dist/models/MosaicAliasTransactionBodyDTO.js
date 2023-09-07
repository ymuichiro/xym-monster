import { AliasActionEnumFromJSON, AliasActionEnumToJSON, } from './AliasActionEnum';
export function instanceOfMosaicAliasTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
export function MosaicAliasTransactionBodyDTOFromJSON(json) {
    return MosaicAliasTransactionBodyDTOFromJSONTyped(json, false);
}
export function MosaicAliasTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'namespaceId': json['namespaceId'],
        'mosaicId': json['mosaicId'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}
export function MosaicAliasTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'namespaceId': value.namespaceId,
        'mosaicId': value.mosaicId,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}
