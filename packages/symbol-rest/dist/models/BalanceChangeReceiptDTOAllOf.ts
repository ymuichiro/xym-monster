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
 * @interface BalanceChangeReceiptDTOAllOf
 */
export interface BalanceChangeReceiptDTOAllOf {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof BalanceChangeReceiptDTOAllOf
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BalanceChangeReceiptDTOAllOf
     */
    amount: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BalanceChangeReceiptDTOAllOf
     */
    targetAddress: string;
}

/**
 * Check if a given object implements the BalanceChangeReceiptDTOAllOf interface.
 */
export function instanceOfBalanceChangeReceiptDTOAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "targetAddress" in value;

    return isInstance;
}

export function BalanceChangeReceiptDTOAllOfFromJSON(json: any): BalanceChangeReceiptDTOAllOf {
    return BalanceChangeReceiptDTOAllOfFromJSONTyped(json, false);
}

export function BalanceChangeReceiptDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceChangeReceiptDTOAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'targetAddress': json['targetAddress'],
    };
}

export function BalanceChangeReceiptDTOAllOfToJSON(value?: BalanceChangeReceiptDTOAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'targetAddress': value.targetAddress,
    };
}

