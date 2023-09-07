import type { AliasActionEnum } from './AliasActionEnum';
export interface AddressAliasTransactionBodyDTO {
    namespaceId: string;
    address: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfAddressAliasTransactionBodyDTO(value: object): boolean;
export declare function AddressAliasTransactionBodyDTOFromJSON(json: any): AddressAliasTransactionBodyDTO;
export declare function AddressAliasTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressAliasTransactionBodyDTO;
export declare function AddressAliasTransactionBodyDTOToJSON(value?: AddressAliasTransactionBodyDTO | null): any;
