import { exists } from '../runtime';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
import { UnresolvedMosaicFromJSON, UnresolvedMosaicToJSON, } from './UnresolvedMosaic';
export function instanceOfTransferTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
export function TransferTransactionDTOFromJSON(json) {
    return TransferTransactionDTOFromJSONTyped(json, false);
}
export function TransferTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        'recipientAddress': json['recipientAddress'],
        'mosaics': (json['mosaics'].map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
export function TransferTransactionDTOToJSON(value) {
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
        'recipientAddress': value.recipientAddress,
        'mosaics': (value.mosaics.map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
