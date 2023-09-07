import type { AliasActionEnum } from './AliasActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicAliasTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    namespaceId: string;
    mosaicId: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfEmbeddedMosaicAliasTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicAliasTransactionDTOFromJSON(json: any): EmbeddedMosaicAliasTransactionDTO;
export declare function EmbeddedMosaicAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicAliasTransactionDTO;
export declare function EmbeddedMosaicAliasTransactionDTOToJSON(value?: EmbeddedMosaicAliasTransactionDTO | null): any;
