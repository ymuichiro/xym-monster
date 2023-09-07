import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicDefinitionTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    id: string;
    duration: string;
    nonce: number;
    flags: number;
    divisibility: number;
}
export declare function instanceOfMosaicDefinitionTransactionDTO(value: object): boolean;
export declare function MosaicDefinitionTransactionDTOFromJSON(json: any): MosaicDefinitionTransactionDTO;
export declare function MosaicDefinitionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDefinitionTransactionDTO;
export declare function MosaicDefinitionTransactionDTOToJSON(value?: MosaicDefinitionTransactionDTO | null): any;
