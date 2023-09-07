import { AliasActionEnumFromJSON, AliasActionEnumToJSON, } from './AliasActionEnum';
export function instanceOfAddressAliasTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "aliasAction" in value;
    return isInstance;
}
export function AddressAliasTransactionBodyDTOFromJSON(json) {
    return AddressAliasTransactionBodyDTOFromJSONTyped(json, false);
}
export function AddressAliasTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}
export function AddressAliasTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}
