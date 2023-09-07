export interface NetworkTypeDTO {
    name: string;
    description: string;
}
export declare function instanceOfNetworkTypeDTO(value: object): boolean;
export declare function NetworkTypeDTOFromJSON(json: any): NetworkTypeDTO;
export declare function NetworkTypeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkTypeDTO;
export declare function NetworkTypeDTOToJSON(value?: NetworkTypeDTO | null): any;
