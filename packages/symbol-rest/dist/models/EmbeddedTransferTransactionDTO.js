import { exists } from '../runtime';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
import { UnresolvedMosaicFromJSON, UnresolvedMosaicToJSON, } from './UnresolvedMosaic';
export function instanceOfEmbeddedTransferTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
export function EmbeddedTransferTransactionDTOFromJSON(json) {
    return EmbeddedTransferTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedTransferTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'recipientAddress': json['recipientAddress'],
        'mosaics': (json['mosaics'].map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
export function EmbeddedTransferTransactionDTOToJSON(value) {
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
        'recipientAddress': value.recipientAddress,
        'mosaics': (value.mosaics.map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
