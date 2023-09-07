export interface MosaicSupplyRevocationTransactionBodyDTO {
    sourceAddress: string;
    mosaicId: string;
    amount: string;
}
export declare function instanceOfMosaicSupplyRevocationTransactionBodyDTO(value: object): boolean;
export declare function MosaicSupplyRevocationTransactionBodyDTOFromJSON(json: any): MosaicSupplyRevocationTransactionBodyDTO;
export declare function MosaicSupplyRevocationTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyRevocationTransactionBodyDTO;
export declare function MosaicSupplyRevocationTransactionBodyDTOToJSON(value?: MosaicSupplyRevocationTransactionBodyDTO | null): any;
