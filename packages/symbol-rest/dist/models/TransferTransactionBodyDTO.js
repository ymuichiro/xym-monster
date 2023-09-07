import { exists } from '../runtime';
import { UnresolvedMosaicFromJSON, UnresolvedMosaicToJSON, } from './UnresolvedMosaic';
export function instanceOfTransferTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
export function TransferTransactionBodyDTOFromJSON(json) {
    return TransferTransactionBodyDTOFromJSONTyped(json, false);
}
export function TransferTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'recipientAddress': json['recipientAddress'],
        'mosaics': (json['mosaics'].map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
export function TransferTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'recipientAddress': value.recipientAddress,
        'mosaics': (value.mosaics.map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
