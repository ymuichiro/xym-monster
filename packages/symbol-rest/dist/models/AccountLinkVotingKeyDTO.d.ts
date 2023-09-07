export interface AccountLinkVotingKeyDTO {
    publicKey: string;
    startEpoch: number;
    endEpoch: number;
}
export declare function instanceOfAccountLinkVotingKeyDTO(value: object): boolean;
export declare function AccountLinkVotingKeyDTOFromJSON(json: any): AccountLinkVotingKeyDTO;
export declare function AccountLinkVotingKeyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLinkVotingKeyDTO;
export declare function AccountLinkVotingKeyDTOToJSON(value?: AccountLinkVotingKeyDTO | null): any;
