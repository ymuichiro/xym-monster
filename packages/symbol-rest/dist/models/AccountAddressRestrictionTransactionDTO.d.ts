import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AccountAddressRestrictionTransactionDTO {
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
export declare function instanceOfAccountAddressRestrictionTransactionDTO(value: object): boolean;
export declare function AccountAddressRestrictionTransactionDTOFromJSON(json: any): AccountAddressRestrictionTransactionDTO;
export declare function AccountAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddressRestrictionTransactionDTO;
export declare function AccountAddressRestrictionTransactionDTOToJSON(value?: AccountAddressRestrictionTransactionDTO | null): any;
