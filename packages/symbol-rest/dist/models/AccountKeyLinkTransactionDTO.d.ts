import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AccountKeyLinkTransactionDTO {
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
export declare function instanceOfAccountKeyLinkTransactionDTO(value: object): boolean;
export declare function AccountKeyLinkTransactionDTOFromJSON(json: any): AccountKeyLinkTransactionDTO;
export declare function AccountKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyLinkTransactionDTO;
export declare function AccountKeyLinkTransactionDTOToJSON(value?: AccountKeyLinkTransactionDTO | null): any;
