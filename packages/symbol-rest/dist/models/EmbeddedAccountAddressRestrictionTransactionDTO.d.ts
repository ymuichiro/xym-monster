import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedAccountAddressRestrictionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<string>;
    restrictionDeletions?: Array<string>;
}
export declare function instanceOfEmbeddedAccountAddressRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountAddressRestrictionTransactionDTOFromJSON(json: any): EmbeddedAccountAddressRestrictionTransactionDTO;
export declare function EmbeddedAccountAddressRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountAddressRestrictionTransactionDTO;
export declare function EmbeddedAccountAddressRestrictionTransactionDTOToJSON(value?: EmbeddedAccountAddressRestrictionTransactionDTO | null): any;
