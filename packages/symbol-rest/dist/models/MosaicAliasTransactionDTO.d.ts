import type { AliasActionEnum } from './AliasActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicAliasTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    namespaceId: string;
    mosaicId: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfMosaicAliasTransactionDTO(value: object): boolean;
export declare function MosaicAliasTransactionDTOFromJSON(json: any): MosaicAliasTransactionDTO;
export declare function MosaicAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAliasTransactionDTO;
export declare function MosaicAliasTransactionDTOToJSON(value?: MosaicAliasTransactionDTO | null): any;
