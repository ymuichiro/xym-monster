export interface SecretLockNetworkPropertiesDTO {
    maxSecretLockDuration?: string;
    minProofSize?: string;
    maxProofSize?: string;
}
export declare function instanceOfSecretLockNetworkPropertiesDTO(value: object): boolean;
export declare function SecretLockNetworkPropertiesDTOFromJSON(json: any): SecretLockNetworkPropertiesDTO;
export declare function SecretLockNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockNetworkPropertiesDTO;
export declare function SecretLockNetworkPropertiesDTOToJSON(value?: SecretLockNetworkPropertiesDTO | null): any;
