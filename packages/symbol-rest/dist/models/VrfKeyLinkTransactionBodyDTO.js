import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
export function instanceOfVrfKeyLinkTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    return isInstance;
}
export function VrfKeyLinkTransactionBodyDTOFromJSON(json) {
    return VrfKeyLinkTransactionBodyDTOFromJSONTyped(json, false);
}
export function VrfKeyLinkTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}
export function VrfKeyLinkTransactionBodyDTOToJSON(value) {
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
