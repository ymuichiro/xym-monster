import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
export interface AccountMosaicRestrictionTransactionBodyDTO {
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<string>;
    restrictionDeletions?: Array<string>;
}
export declare function instanceOfAccountMosaicRestrictionTransactionBodyDTO(value: object): boolean;
export declare function AccountMosaicRestrictionTransactionBodyDTOFromJSON(json: any): AccountMosaicRestrictionTransactionBodyDTO;
export declare function AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMosaicRestrictionTransactionBodyDTO;
export declare function AccountMosaicRestrictionTransactionBodyDTOToJSON(value?: AccountMosaicRestrictionTransactionBodyDTO | null): any;
