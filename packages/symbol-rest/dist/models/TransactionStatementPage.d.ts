import type { Pagination } from './Pagination';
import type { TransactionStatementInfoDTO } from './TransactionStatementInfoDTO';
export interface TransactionStatementPage {
    data: Array<TransactionStatementInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfTransactionStatementPage(value: object): boolean;
export declare function TransactionStatementPageFromJSON(json: any): TransactionStatementPage;
export declare function TransactionStatementPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementPage;
export declare function TransactionStatementPageToJSON(value?: TransactionStatementPage | null): any;
