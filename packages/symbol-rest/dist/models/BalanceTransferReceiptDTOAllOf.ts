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
 * @interface BalanceTransferReceiptDTOAllOf
 */
export interface BalanceTransferReceiptDTOAllOf {
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof BalanceTransferReceiptDTOAllOf
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BalanceTransferReceiptDTOAllOf
     */
    amount: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BalanceTransferReceiptDTOAllOf
     */
    senderAddress: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof BalanceTransferReceiptDTOAllOf
     */
    recipientAddress: string;
}

/**
 * Check if a given object implements the BalanceTransferReceiptDTOAllOf interface.
 */
export function instanceOfBalanceTransferReceiptDTOAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "senderAddress" in value;
    isInstance = isInstance && "recipientAddress" in value;

    return isInstance;
}

export function BalanceTransferReceiptDTOAllOfFromJSON(json: any): BalanceTransferReceiptDTOAllOf {
    return BalanceTransferReceiptDTOAllOfFromJSONTyped(json, false);
}

export function BalanceTransferReceiptDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceTransferReceiptDTOAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'senderAddress': json['senderAddress'],
        'recipientAddress': json['recipientAddress'],
    };
}

export function BalanceTransferReceiptDTOAllOfToJSON(value?: BalanceTransferReceiptDTOAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'senderAddress': value.senderAddress,
        'recipientAddress': value.recipientAddress,
    };
}

