import type { ServerDTO } from './ServerDTO';
export interface ServerInfoDTO {
    serverInfo: ServerDTO;
}
export declare function instanceOfServerInfoDTO(value: object): boolean;
export declare function ServerInfoDTOFromJSON(json: any): ServerInfoDTO;
export declare function ServerInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerInfoDTO;
export declare function ServerInfoDTOToJSON(value?: ServerInfoDTO | null): any;
