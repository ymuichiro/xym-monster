import type { Pagination } from './Pagination';
import type { SecretLockInfoDTO } from './SecretLockInfoDTO';
export interface SecretLockPage {
    data: Array<SecretLockInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfSecretLockPage(value: object): boolean;
export declare function SecretLockPageFromJSON(json: any): SecretLockPage;
export declare function SecretLockPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockPage;
export declare function SecretLockPageToJSON(value?: SecretLockPage | null): any;
