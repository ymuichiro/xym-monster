export interface NodeInfoDTO {
    version: number;
    publicKey: string;
    networkGenerationHashSeed: string;
    roles: number;
    port: number;
    networkIdentifier: number;
    friendlyName: string;
    host: string;
    nodePublicKey?: string;
}
export declare function instanceOfNodeInfoDTO(value: object): boolean;
export declare function NodeInfoDTOFromJSON(json: any): NodeInfoDTO;
export declare function NodeInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeInfoDTO;
export declare function NodeInfoDTOToJSON(value?: NodeInfoDTO | null): any;
