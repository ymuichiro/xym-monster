/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import {
    LockHashAlgorithmEnumFromJSON,
    LockHashAlgorithmEnumFromJSONTyped,
    LockHashAlgorithmEnumToJSON,
} from './LockHashAlgorithmEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedSecretLockTransactionDTO
 */
export interface EmbeddedSecretLockTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    recipientAddress: string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    secret: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    amount: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    duration: string;
    /**
     * 
     * @type {LockHashAlgorithmEnum}
     * @memberof EmbeddedSecretLockTransactionDTO
     */
    hashAlgorithm: LockHashAlgorithmEnum;
}

/**
 * Check if a given object implements the EmbeddedSecretLockTransactionDTO interface.
 */
export function instanceOfEmbeddedSecretLockTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hashAlgorithm" in value;

    return isInstance;
}

export function EmbeddedSecretLockTransactionDTOFromJSON(json: any): EmbeddedSecretLockTransactionDTO {
    return EmbeddedSecretLockTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedSecretLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedSecretLockTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
    };
}

export function EmbeddedSecretLockTransactionDTOToJSON(value?: EmbeddedSecretLockTransactionDTO | null): any {
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
        'secret': value.secret,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
    };
}

