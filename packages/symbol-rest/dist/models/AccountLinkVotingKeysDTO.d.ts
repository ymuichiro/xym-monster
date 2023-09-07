import type { AccountLinkVotingKeyDTO } from './AccountLinkVotingKeyDTO';
export interface AccountLinkVotingKeysDTO {
    publicKeys: Array<AccountLinkVotingKeyDTO>;
}
export declare function instanceOfAccountLinkVotingKeysDTO(value: object): boolean;
export declare function AccountLinkVotingKeysDTOFromJSON(json: any): AccountLinkVotingKeysDTO;
export declare function AccountLinkVotingKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLinkVotingKeysDTO;
export declare function AccountLinkVotingKeysDTOToJSON(value?: AccountLinkVotingKeysDTO | null): any;
