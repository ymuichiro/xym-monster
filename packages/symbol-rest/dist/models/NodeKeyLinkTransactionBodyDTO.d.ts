import type { LinkActionEnum } from './LinkActionEnum';
export interface NodeKeyLinkTransactionBodyDTO {
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfNodeKeyLinkTransactionBodyDTO(value: object): boolean;
export declare function NodeKeyLinkTransactionBodyDTOFromJSON(json: any): NodeKeyLinkTransactionBodyDTO;
export declare function NodeKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeKeyLinkTransactionBodyDTO;
export declare function NodeKeyLinkTransactionBodyDTOToJSON(value?: NodeKeyLinkTransactionBodyDTO | null): any;
