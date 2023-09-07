import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface VotingKeyLinkTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    linkedPublicKey: string;
    startEpoch: number;
    endEpoch: number;
    linkAction: LinkActionEnum;
}
export declare function instanceOfVotingKeyLinkTransactionDTO(value: object): boolean;
export declare function VotingKeyLinkTransactionDTOFromJSON(json: any): VotingKeyLinkTransactionDTO;
export declare function VotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VotingKeyLinkTransactionDTO;
export declare function VotingKeyLinkTransactionDTOToJSON(value?: VotingKeyLinkTransactionDTO | null): any;
