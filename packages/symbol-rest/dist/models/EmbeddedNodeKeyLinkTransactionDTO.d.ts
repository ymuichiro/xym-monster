import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedNodeKeyLinkTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfEmbeddedNodeKeyLinkTransactionDTO(value: object): boolean;
export declare function EmbeddedNodeKeyLinkTransactionDTOFromJSON(json: any): EmbeddedNodeKeyLinkTransactionDTO;
export declare function EmbeddedNodeKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedNodeKeyLinkTransactionDTO;
export declare function EmbeddedNodeKeyLinkTransactionDTOToJSON(value?: EmbeddedNodeKeyLinkTransactionDTO | null): any;
