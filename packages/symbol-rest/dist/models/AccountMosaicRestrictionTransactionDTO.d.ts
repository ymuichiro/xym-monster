import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AccountMosaicRestrictionTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<string>;
    restrictionDeletions?: Array<string>;
}
export declare function instanceOfAccountMosaicRestrictionTransactionDTO(value: object): boolean;
export declare function AccountMosaicRestrictionTransactionDTOFromJSON(json: any): AccountMosaicRestrictionTransactionDTO;
export declare function AccountMosaicRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountMosaicRestrictionTransactionDTO;
export declare function AccountMosaicRestrictionTransactionDTOToJSON(value?: AccountMosaicRestrictionTransactionDTO | null): any;
