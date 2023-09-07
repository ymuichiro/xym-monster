import type { HashLockInfoDTO } from './HashLockInfoDTO';
import type { Pagination } from './Pagination';
export interface HashLockPage {
    data: Array<HashLockInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfHashLockPage(value: object): boolean;
export declare function HashLockPageFromJSON(json: any): HashLockPage;
export declare function HashLockPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockPage;
export declare function HashLockPageToJSON(value?: HashLockPage | null): any;
