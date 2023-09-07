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
/**
 * 
 * @export
 * @interface SecretLockNetworkPropertiesDTO
 */
export interface SecretLockNetworkPropertiesDTO {
    /**
     * Maximum number of blocks for which a secret lock can exist.
     * @type {string}
     * @memberof SecretLockNetworkPropertiesDTO
     */
    maxSecretLockDuration?: string;
    /**
     * Minimum size of a proof in bytes.
     * @type {string}
     * @memberof SecretLockNetworkPropertiesDTO
     */
    minProofSize?: string;
    /**
     * Maximum size of a proof in bytes.
     * @type {string}
     * @memberof SecretLockNetworkPropertiesDTO
     */
    maxProofSize?: string;
}

/**
 * Check if a given object implements the SecretLockNetworkPropertiesDTO interface.
 */
export function instanceOfSecretLockNetworkPropertiesDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SecretLockNetworkPropertiesDTOFromJSON(json: any): SecretLockNetworkPropertiesDTO {
    return SecretLockNetworkPropertiesDTOFromJSONTyped(json, false);
}

export function SecretLockNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockNetworkPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxSecretLockDuration': !exists(json, 'maxSecretLockDuration') ? undefined : json['maxSecretLockDuration'],
        'minProofSize': !exists(json, 'minProofSize') ? undefined : json['minProofSize'],
        'maxProofSize': !exists(json, 'maxProofSize') ? undefined : json['maxProofSize'],
    };
}

export function SecretLockNetworkPropertiesDTOToJSON(value?: SecretLockNetworkPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxSecretLockDuration': value.maxSecretLockDuration,
        'minProofSize': value.minProofSize,
        'maxProofSize': value.maxProofSize,
    };
}

