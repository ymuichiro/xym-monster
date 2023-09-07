import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedVrfKeyLinkTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfEmbeddedVrfKeyLinkTransactionDTO(value: object): boolean;
export declare function EmbeddedVrfKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVrfKeyLinkTransactionDTO;
export declare function EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVrfKeyLinkTransactionDTO;
export declare function EmbeddedVrfKeyLinkTransactionDTOToJSON(value?: EmbeddedVrfKeyLinkTransactionDTO | null): any;
