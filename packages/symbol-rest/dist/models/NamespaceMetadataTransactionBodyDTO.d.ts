export interface NamespaceMetadataTransactionBodyDTO {
    targetAddress: string;
    scopedMetadataKey: string;
    targetNamespaceId?: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfNamespaceMetadataTransactionBodyDTO(value: object): boolean;
export declare function NamespaceMetadataTransactionBodyDTOFromJSON(json: any): NamespaceMetadataTransactionBodyDTO;
export declare function NamespaceMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetadataTransactionBodyDTO;
export declare function NamespaceMetadataTransactionBodyDTOToJSON(value?: NamespaceMetadataTransactionBodyDTO | null): any;
