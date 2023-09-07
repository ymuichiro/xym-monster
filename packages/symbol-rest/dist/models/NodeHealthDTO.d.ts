import type { NodeStatusEnum } from './NodeStatusEnum';
export interface NodeHealthDTO {
    apiNode: NodeStatusEnum;
    db: NodeStatusEnum;
}
export declare function instanceOfNodeHealthDTO(value: object): boolean;
export declare function NodeHealthDTOFromJSON(json: any): NodeHealthDTO;
export declare function NodeHealthDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHealthDTO;
export declare function NodeHealthDTOToJSON(value?: NodeHealthDTO | null): any;
