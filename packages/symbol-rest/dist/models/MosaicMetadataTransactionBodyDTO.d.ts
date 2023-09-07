export interface MosaicMetadataTransactionBodyDTO {
    targetAddress: string;
    scopedMetadataKey: string;
    targetMosaicId: string;
    valueSizeDelta: number;
    valueSize: number;
    value: string;
}
export declare function instanceOfMosaicMetadataTransactionBodyDTO(value: object): boolean;
export declare function MosaicMetadataTransactionBodyDTOFromJSON(json: any): MosaicMetadataTransactionBodyDTO;
export declare function MosaicMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicMetadataTransactionBodyDTO;
export declare function MosaicMetadataTransactionBodyDTOToJSON(value?: MosaicMetadataTransactionBodyDTO | null): any;
