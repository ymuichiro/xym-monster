export interface MultisigNetworkPropertiesDTO {
    maxMultisigDepth?: string;
    maxCosignatoriesPerAccount?: string;
    maxCosignedAccountsPerAccount?: string;
}
export declare function instanceOfMultisigNetworkPropertiesDTO(value: object): boolean;
export declare function MultisigNetworkPropertiesDTOFromJSON(json: any): MultisigNetworkPropertiesDTO;
export declare function MultisigNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigNetworkPropertiesDTO;
export declare function MultisigNetworkPropertiesDTOToJSON(value?: MultisigNetworkPropertiesDTO | null): any;
