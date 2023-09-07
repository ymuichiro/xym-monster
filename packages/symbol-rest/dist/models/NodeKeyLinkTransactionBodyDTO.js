import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
export function instanceOfNodeKeyLinkTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
export function NodeKeyLinkTransactionBodyDTOFromJSON(json) {
    return NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}
export function NodeKeyLinkTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function NodeKeyLinkTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}
