import type { AccountRestrictionDTO } from './AccountRestrictionDTO';
export interface AccountRestrictionsDTO {
    version: number;
    address: string;
    restrictions: Array<AccountRestrictionDTO>;
}
export declare function instanceOfAccountRestrictionsDTO(value: object): boolean;
export declare function AccountRestrictionsDTOFromJSON(json: any): AccountRestrictionsDTO;
export declare function AccountRestrictionsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsDTO;
export declare function AccountRestrictionsDTOToJSON(value?: AccountRestrictionsDTO | null): any;
