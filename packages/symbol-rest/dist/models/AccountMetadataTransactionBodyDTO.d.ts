export interface AccountMetadataTransactionBodyDTO {
    targetAddress: string;
    scopedMetadataKey: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfAccountMetadataTransactionBodyDTO(value: object): boolean;
export declare function AccountMetadataTransactionBodyDTOFromJSON(json: any): AccountMetadataTransactionBodyDTO;
export declare function AccountMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMetadataTransactionBodyDTO;
export declare function AccountMetadataTransactionBodyDTOToJSON(value?: AccountMetadataTransactionBodyDTO | null): any;
