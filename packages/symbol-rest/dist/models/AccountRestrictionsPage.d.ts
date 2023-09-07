import type { AccountRestrictionsInfoDTO } from './AccountRestrictionsInfoDTO';
import type { Pagination } from './Pagination';
export interface AccountRestrictionsPage {
    data: Array<AccountRestrictionsInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfAccountRestrictionsPage(value: object): boolean;
export declare function AccountRestrictionsPageFromJSON(json: any): AccountRestrictionsPage;
export declare function AccountRestrictionsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsPage;
export declare function AccountRestrictionsPageToJSON(value?: AccountRestrictionsPage | null): any;
