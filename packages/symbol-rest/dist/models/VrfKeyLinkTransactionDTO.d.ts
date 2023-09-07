import type { LinkActionEnum } from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface VrfKeyLinkTransactionDTO {
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
export declare function instanceOfVrfKeyLinkTransactionDTO(value: object): boolean;
export declare function VrfKeyLinkTransactionDTOFromJSON(json: any): VrfKeyLinkTransactionDTO;
export declare function VrfKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrfKeyLinkTransactionDTO;
export declare function VrfKeyLinkTransactionDTOToJSON(value?: VrfKeyLinkTransactionDTO | null): any;
