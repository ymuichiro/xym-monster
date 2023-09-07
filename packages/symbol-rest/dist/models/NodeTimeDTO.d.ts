import type { CommunicationTimestampsDTO } from './CommunicationTimestampsDTO';
export interface NodeTimeDTO {
    communicationTimestamps: CommunicationTimestampsDTO;
}
export declare function instanceOfNodeTimeDTO(value: object): boolean;
export declare function NodeTimeDTOFromJSON(json: any): NodeTimeDTO;
export declare function NodeTimeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeTimeDTO;
export declare function NodeTimeDTOToJSON(value?: NodeTimeDTO | null): any;
