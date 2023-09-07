export interface MosaicDefinitionTransactionBodyDTO {
    id: string;
    duration: string;
    nonce: number;
    flags: number;
    divisibility: number;
}
export declare function instanceOfMosaicDefinitionTransactionBodyDTO(value: object): boolean;
export declare function MosaicDefinitionTransactionBodyDTOFromJSON(json: any): MosaicDefinitionTransactionBodyDTO;
export declare function MosaicDefinitionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDefinitionTransactionBodyDTO;
export declare function MosaicDefinitionTransactionBodyDTOToJSON(value?: MosaicDefinitionTransactionBodyDTO | null): any;
