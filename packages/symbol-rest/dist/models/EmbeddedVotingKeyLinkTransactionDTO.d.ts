import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedVotingKeyLinkTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    linkedPublicKey: string;
    startEpoch: number;
    endEpoch: number;
    linkAction: LinkActionEnum;
}
export declare function instanceOfEmbeddedVotingKeyLinkTransactionDTO(value: object): boolean;
export declare function EmbeddedVotingKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVotingKeyLinkTransactionDTO;
export declare function EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVotingKeyLinkTransactionDTO;
export declare function EmbeddedVotingKeyLinkTransactionDTOToJSON(value?: EmbeddedVotingKeyLinkTransactionDTO | null): any;
