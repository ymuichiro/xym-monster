export interface NamespaceNetworkPropertiesDTO {
    maxNameSize?: string;
    maxChildNamespaces?: string;
    maxNamespaceDepth?: string;
    minNamespaceDuration?: string;
    maxNamespaceDuration?: string;
    namespaceGracePeriodDuration?: string;
    reservedRootNamespaceNames?: string;
    namespaceRentalFeeSinkAddress?: string;
    rootNamespaceRentalFeePerBlock?: string;
    childNamespaceRentalFee?: string;
}
export declare function instanceOfNamespaceNetworkPropertiesDTO(value: object): boolean;
export declare function NamespaceNetworkPropertiesDTOFromJSON(json: any): NamespaceNetworkPropertiesDTO;
export declare function NamespaceNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceNetworkPropertiesDTO;
export declare function NamespaceNetworkPropertiesDTOToJSON(value?: NamespaceNetworkPropertiesDTO | null): any;
