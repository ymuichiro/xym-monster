import type { AccountInfoDTO } from './AccountInfoDTO';
import type { Pagination } from './Pagination';
export interface AccountPage {
    data: Array<AccountInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfAccountPage(value: object): boolean;
export declare function AccountPageFromJSON(json: any): AccountPage;
export declare function AccountPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPage;
export declare function AccountPageToJSON(value?: AccountPage | null): any;
