import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
export interface AccountAddressRestrictionTransactionBodyDTO {
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<string>;
    restrictionDeletions?: Array<string>;
}
export declare function instanceOfAccountAddressRestrictionTransactionBodyDTO(value: object): boolean;
export declare function AccountAddressRestrictionTransactionBodyDTOFromJSON(json: any): AccountAddressRestrictionTransactionBodyDTO;
export declare function AccountAddressRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddressRestrictionTransactionBodyDTO;
export declare function AccountAddressRestrictionTransactionBodyDTOToJSON(value?: AccountAddressRestrictionTransactionBodyDTO | null): any;
