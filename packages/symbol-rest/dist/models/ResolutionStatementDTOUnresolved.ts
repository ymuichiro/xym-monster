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
 * @interface ResolutionStatementDTOUnresolved
 */
export interface ResolutionStatementDTOUnresolved {
}

/**
 * Check if a given object implements the ResolutionStatementDTOUnresolved interface.
 */
export function instanceOfResolutionStatementDTOUnresolved(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResolutionStatementDTOUnresolvedFromJSON(json: any): ResolutionStatementDTOUnresolved {
    return ResolutionStatementDTOUnresolvedFromJSONTyped(json, false);
}

export function ResolutionStatementDTOUnresolvedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementDTOUnresolved {
    return json;
}

export function ResolutionStatementDTOUnresolvedToJSON(value?: ResolutionStatementDTOUnresolved | null): any {
    return value;
}

