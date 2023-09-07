import type { AccountLinkPublicKeyDTO } from './AccountLinkPublicKeyDTO';
import type { AccountLinkVotingKeysDTO } from './AccountLinkVotingKeysDTO';
export interface SupplementalPublicKeysDTO {
    linked?: AccountLinkPublicKeyDTO;
    node?: AccountLinkPublicKeyDTO;
    vrf?: AccountLinkPublicKeyDTO;
    voting?: AccountLinkVotingKeysDTO;
}
export declare function instanceOfSupplementalPublicKeysDTO(value: object): boolean;
export declare function SupplementalPublicKeysDTOFromJSON(json: any): SupplementalPublicKeysDTO;
export declare function SupplementalPublicKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplementalPublicKeysDTO;
export declare function SupplementalPublicKeysDTOToJSON(value?: SupplementalPublicKeysDTO | null): any;
