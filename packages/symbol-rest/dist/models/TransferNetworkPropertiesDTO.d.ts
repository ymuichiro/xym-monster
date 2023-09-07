export interface TransferNetworkPropertiesDTO {
    maxMessageSize?: string;
}
export declare function instanceOfTransferNetworkPropertiesDTO(value: object): boolean;
export declare function TransferNetworkPropertiesDTOFromJSON(json: any): TransferNetworkPropertiesDTO;
export declare function TransferNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferNetworkPropertiesDTO;
export declare function TransferNetworkPropertiesDTOToJSON(value?: TransferNetworkPropertiesDTO | null): any;
