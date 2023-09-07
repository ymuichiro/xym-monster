import type { NodeHealthDTO } from './NodeHealthDTO';
export interface NodeHealthInfoDTO {
    status: NodeHealthDTO;
}
export declare function instanceOfNodeHealthInfoDTO(value: object): boolean;
export declare function NodeHealthInfoDTOFromJSON(json: any): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHealthInfoDTO;
export declare function NodeHealthInfoDTOToJSON(value?: NodeHealthInfoDTO | null): any;
