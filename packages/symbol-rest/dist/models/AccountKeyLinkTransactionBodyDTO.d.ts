import type { LinkActionEnum } from './LinkActionEnum';
export interface AccountKeyLinkTransactionBodyDTO {
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfAccountKeyLinkTransactionBodyDTO(value: object): boolean;
export declare function AccountKeyLinkTransactionBodyDTOFromJSON(json: any): AccountKeyLinkTransactionBodyDTO;
export declare function AccountKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyLinkTransactionBodyDTO;
export declare function AccountKeyLinkTransactionBodyDTOToJSON(value?: AccountKeyLinkTransactionBodyDTO | null): any;
