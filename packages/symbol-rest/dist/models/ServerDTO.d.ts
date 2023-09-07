import type { DeploymentDTO } from './DeploymentDTO';
export interface ServerDTO {
    restVersion: string;
    sdkVersion: string;
    deployment: DeploymentDTO;
}
export declare function instanceOfServerDTO(value: object): boolean;
export declare function ServerDTOFromJSON(json: any): ServerDTO;
export declare function ServerDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerDTO;
export declare function ServerDTOToJSON(value?: ServerDTO | null): any;
