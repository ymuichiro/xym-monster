import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface NodeKeyLinkTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfNodeKeyLinkTransactionDTO(value: object): boolean;
export declare function NodeKeyLinkTransactionDTOFromJSON(json: any): NodeKeyLinkTransactionDTO;
export declare function NodeKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeKeyLinkTransactionDTO;
export declare function NodeKeyLinkTransactionDTOToJSON(value?: NodeKeyLinkTransactionDTO | null): any;
