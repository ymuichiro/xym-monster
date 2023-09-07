import type { AccountRestrictionDTOValuesInner } from './AccountRestrictionDTOValuesInner';
import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
export interface AccountRestrictionDTO {
    restrictionFlags: AccountRestrictionFlagsEnum;
    values: Array<AccountRestrictionDTOValuesInner>;
}
export declare function instanceOfAccountRestrictionDTO(value: object): boolean;
export declare function AccountRestrictionDTOFromJSON(json: any): AccountRestrictionDTO;
export declare function AccountRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionDTO;
export declare function AccountRestrictionDTOToJSON(value?: AccountRestrictionDTO | null): any;
