import type { NodeIdentityEqualityStrategy } from './NodeIdentityEqualityStrategy';
export interface NetworkPropertiesDTO {
    identifier?: string;
    nodeEqualityStrategy?: NodeIdentityEqualityStrategy;
    nemesisSignerPublicKey?: string;
    generationHashSeed?: string;
    epochAdjustment?: string;
}
export declare function instanceOfNetworkPropertiesDTO(value: object): boolean;
export declare function NetworkPropertiesDTOFromJSON(json: any): NetworkPropertiesDTO;
export declare function NetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkPropertiesDTO;
export declare function NetworkPropertiesDTOToJSON(value?: NetworkPropertiesDTO | null): any;
