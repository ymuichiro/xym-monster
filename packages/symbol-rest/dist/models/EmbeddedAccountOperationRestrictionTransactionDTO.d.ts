import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
export interface EmbeddedAccountOperationRestrictionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<TransactionTypeEnum>;
    restrictionDeletions?: Array<TransactionTypeEnum>;
}
export declare function instanceOfEmbeddedAccountOperationRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOFromJSON(json: any): EmbeddedAccountOperationRestrictionTransactionDTO;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountOperationRestrictionTransactionDTO;
export declare function EmbeddedAccountOperationRestrictionTransactionDTOToJSON(value?: EmbeddedAccountOperationRestrictionTransactionDTO | null): any;
