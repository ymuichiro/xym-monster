export interface DeploymentDTO {
    deploymentTool: string;
    deploymentToolVersion: string;
    lastUpdatedDate: string;
}
export declare function instanceOfDeploymentDTO(value: object): boolean;
export declare function DeploymentDTOFromJSON(json: any): DeploymentDTO;
export declare function DeploymentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploymentDTO;
export declare function DeploymentDTOToJSON(value?: DeploymentDTO | null): any;
