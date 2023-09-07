import type { LinkActionEnum } from './LinkActionEnum';
export interface VotingKeyLinkTransactionBodyDTO {
    linkedPublicKey: string;
    startEpoch: number;
    endEpoch: number;
    linkAction: LinkActionEnum;
}
export declare function instanceOfVotingKeyLinkTransactionBodyDTO(value: object): boolean;
export declare function VotingKeyLinkTransactionBodyDTOFromJSON(json: any): VotingKeyLinkTransactionBodyDTO;
export declare function VotingKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VotingKeyLinkTransactionBodyDTO;
export declare function VotingKeyLinkTransactionBodyDTOToJSON(value?: VotingKeyLinkTransactionBodyDTO | null): any;
