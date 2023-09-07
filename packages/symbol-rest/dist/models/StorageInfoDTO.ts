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
 * @interface StorageInfoDTO
 */
export interface StorageInfoDTO {
    /**
     * Number of blocks stored.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numBlocks: number;
    /**
     * Number of transactions stored.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numTransactions: number;
    /**
     * Number of accounts created.
     * @type {number}
     * @memberof StorageInfoDTO
     */
    numAccounts: number;
}

/**
 * Check if a given object implements the StorageInfoDTO interface.
 */
export function instanceOfStorageInfoDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "numBlocks" in value;
    isInstance = isInstance && "numTransactions" in value;
    isInstance = isInstance && "numAccounts" in value;

    return isInstance;
}

export function StorageInfoDTOFromJSON(json: any): StorageInfoDTO {
    return StorageInfoDTOFromJSONTyped(json, false);
}

export function StorageInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numBlocks': json['numBlocks'],
        'numTransactions': json['numTransactions'],
        'numAccounts': json['numAccounts'],
    };
}

export function StorageInfoDTOToJSON(value?: StorageInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numBlocks': value.numBlocks,
        'numTransactions': value.numTransactions,
        'numAccounts': value.numAccounts,
    };
}

