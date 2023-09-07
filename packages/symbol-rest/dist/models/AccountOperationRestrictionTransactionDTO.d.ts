import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
export interface AccountOperationRestrictionTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<TransactionTypeEnum>;
    restrictionDeletions?: Array<TransactionTypeEnum>;
}
export declare function instanceOfAccountOperationRestrictionTransactionDTO(value: object): boolean;
export declare function AccountOperationRestrictionTransactionDTOFromJSON(json: any): AccountOperationRestrictionTransactionDTO;
export declare function AccountOperationRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOperationRestrictionTransactionDTO;
export declare function AccountOperationRestrictionTransactionDTOToJSON(value?: AccountOperationRestrictionTransactionDTO | null): any;
