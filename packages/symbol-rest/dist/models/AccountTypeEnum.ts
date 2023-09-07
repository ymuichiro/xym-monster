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


/**
 * * 0 - Unlinked.
 * * 1 - Balance-holding account that is linked to a remote harvester account.
 * * 2 - Remote harvester account that is linked to a balance-holding account.
 * * 3 - Remote harvester eligible account that is unlinked.
 * @export
 */
export const AccountTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum];


export function AccountTypeEnumFromJSON(json: any): AccountTypeEnum {
    return AccountTypeEnumFromJSONTyped(json, false);
}

export function AccountTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypeEnum {
    return json as AccountTypeEnum;
}

export function AccountTypeEnumToJSON(value?: AccountTypeEnum | null): any {
    return value as any;
}

