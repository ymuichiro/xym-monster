import type { Pagination } from './Pagination';
import type { TransactionInfoDTO } from './TransactionInfoDTO';
export interface TransactionPage {
    data: Array<TransactionInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfTransactionPage(value: object): boolean;
export declare function TransactionPageFromJSON(json: any): TransactionPage;
export declare function TransactionPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPage;
export declare function TransactionPageToJSON(value?: TransactionPage | null): any;
