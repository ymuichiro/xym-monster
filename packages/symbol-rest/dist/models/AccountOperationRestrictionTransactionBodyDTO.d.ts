import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
export interface AccountOperationRestrictionTransactionBodyDTO {
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<TransactionTypeEnum>;
    restrictionDeletions?: Array<TransactionTypeEnum>;
}
export declare function instanceOfAccountOperationRestrictionTransactionBodyDTO(value: object): boolean;
export declare function AccountOperationRestrictionTransactionBodyDTOFromJSON(json: any): AccountOperationRestrictionTransactionBodyDTO;
export declare function AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionBodyDTO;
export declare function AccountOperationRestrictionTransactionBodyDTOToJSON(value?: AccountOperationRestrictionTransactionBodyDTO | null): any;
