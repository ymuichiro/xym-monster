export interface AccountLinkPublicKeyDTO {
    publicKey: string;
}
export declare function instanceOfAccountLinkPublicKeyDTO(value: object): boolean;
export declare function AccountLinkPublicKeyDTOFromJSON(json: any): AccountLinkPublicKeyDTO;
export declare function AccountLinkPublicKeyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLinkPublicKeyDTO;
export declare function AccountLinkPublicKeyDTOToJSON(value?: AccountLinkPublicKeyDTO | null): any;
