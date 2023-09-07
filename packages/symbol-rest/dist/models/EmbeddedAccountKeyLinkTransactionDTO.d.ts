import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedAccountKeyLinkTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfEmbeddedAccountKeyLinkTransactionDTO(value: object): boolean;
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSON(json: any): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountKeyLinkTransactionDTO;
export declare function EmbeddedAccountKeyLinkTransactionDTOToJSON(value?: EmbeddedAccountKeyLinkTransactionDTO | null): any;
