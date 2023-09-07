import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicDefinitionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    id: string;
    duration: string;
    nonce: number;
    flags: number;
    divisibility: number;
}
export declare function instanceOfEmbeddedMosaicDefinitionTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicDefinitionTransactionDTOFromJSON(json: any): EmbeddedMosaicDefinitionTransactionDTO;
export declare function EmbeddedMosaicDefinitionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicDefinitionTransactionDTO;
export declare function EmbeddedMosaicDefinitionTransactionDTOToJSON(value?: EmbeddedMosaicDefinitionTransactionDTO | null): any;
