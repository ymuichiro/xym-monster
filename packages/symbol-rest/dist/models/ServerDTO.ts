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
import type { DeploymentDTO } from './DeploymentDTO';
import {
    DeploymentDTOFromJSON,
    DeploymentDTOFromJSONTyped,
    DeploymentDTOToJSON,
} from './DeploymentDTO';

/**
 * 
 * @export
 * @interface ServerDTO
 */
export interface ServerDTO {
    /**
     * catapult-rest component version.
     * @type {string}
     * @memberof ServerDTO
     */
    restVersion: string;
    /**
     * catapult-sdk component version.
     * @type {string}
     * @memberof ServerDTO
     */
    sdkVersion: string;
    /**
     * 
     * @type {DeploymentDTO}
     * @memberof ServerDTO
     */
    deployment: DeploymentDTO;
}

/**
 * Check if a given object implements the ServerDTO interface.
 */
export function instanceOfServerDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "restVersion" in value;
    isInstance = isInstance && "sdkVersion" in value;
    isInstance = isInstance && "deployment" in value;

    return isInstance;
}

export function ServerDTOFromJSON(json: any): ServerDTO {
    return ServerDTOFromJSONTyped(json, false);
}

export function ServerDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'restVersion': json['restVersion'],
        'sdkVersion': json['sdkVersion'],
        'deployment': DeploymentDTOFromJSON(json['deployment']),
    };
}

export function ServerDTOToJSON(value?: ServerDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'restVersion': value.restVersion,
        'sdkVersion': value.sdkVersion,
        'deployment': DeploymentDTOToJSON(value.deployment),
    };
}

