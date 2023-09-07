import type { AccountRestrictionsDTO } from './AccountRestrictionsDTO';
export interface AccountRestrictionsInfoDTO {
    accountRestrictions: AccountRestrictionsDTO;
}
export declare function instanceOfAccountRestrictionsInfoDTO(value: object): boolean;
export declare function AccountRestrictionsInfoDTOFromJSON(json: any): AccountRestrictionsInfoDTO;
export declare function AccountRestrictionsInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsInfoDTO;
export declare function AccountRestrictionsInfoDTOToJSON(value?: AccountRestrictionsInfoDTO | null): any;
