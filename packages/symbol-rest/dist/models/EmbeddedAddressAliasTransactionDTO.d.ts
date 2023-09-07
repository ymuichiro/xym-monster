import type { AliasActionEnum } from './AliasActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedAddressAliasTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    namespaceId: string;
    address: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfEmbeddedAddressAliasTransactionDTO(value: object): boolean;
export declare function EmbeddedAddressAliasTransactionDTOFromJSON(json: any): EmbeddedAddressAliasTransactionDTO;
export declare function EmbeddedAddressAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAddressAliasTransactionDTO;
export declare function EmbeddedAddressAliasTransactionDTOToJSON(value?: EmbeddedAddressAliasTransactionDTO | null): any;
