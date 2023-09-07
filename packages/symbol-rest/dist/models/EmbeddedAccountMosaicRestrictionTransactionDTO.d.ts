import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedAccountMosaicRestrictionTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    restrictionFlags: AccountRestrictionFlagsEnum;
    restrictionAdditions?: Array<string>;
    restrictionDeletions?: Array<string>;
}
export declare function instanceOfEmbeddedAccountMosaicRestrictionTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOFromJSON(json: any): EmbeddedAccountMosaicRestrictionTransactionDTO;
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountMosaicRestrictionTransactionDTO;
export declare function EmbeddedAccountMosaicRestrictionTransactionDTOToJSON(value?: EmbeddedAccountMosaicRestrictionTransactionDTO | null): any;
