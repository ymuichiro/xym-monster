import type { LinkActionEnum } from './LinkActionEnum';
export interface VrfKeyLinkTransactionBodyDTO {
    linkedPublicKey: string;
    linkAction: LinkActionEnum;
}
export declare function instanceOfVrfKeyLinkTransactionBodyDTO(value: object): boolean;
export declare function VrfKeyLinkTransactionBodyDTOFromJSON(json: any): VrfKeyLinkTransactionBodyDTO;
export declare function VrfKeyLinkTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrfKeyLinkTransactionBodyDTO;
export declare function VrfKeyLinkTransactionBodyDTOToJSON(value?: VrfKeyLinkTransactionBodyDTO | null): any;
