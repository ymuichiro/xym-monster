import type { AliasActionEnum } from './AliasActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AddressAliasTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    namespaceId: string;
    address: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfAddressAliasTransactionDTO(value: object): boolean;
export declare function AddressAliasTransactionDTOFromJSON(json: any): AddressAliasTransactionDTO;
export declare function AddressAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressAliasTransactionDTO;
export declare function AddressAliasTransactionDTOToJSON(value?: AddressAliasTransactionDTO | null): any;
