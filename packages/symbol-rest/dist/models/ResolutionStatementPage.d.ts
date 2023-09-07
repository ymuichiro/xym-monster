import type { Pagination } from './Pagination';
import type { ResolutionStatementInfoDTO } from './ResolutionStatementInfoDTO';
export interface ResolutionStatementPage {
    data: Array<ResolutionStatementInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfResolutionStatementPage(value: object): boolean;
export declare function ResolutionStatementPageFromJSON(json: any): ResolutionStatementPage;
export declare function ResolutionStatementPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementPage;
export declare function ResolutionStatementPageToJSON(value?: ResolutionStatementPage | null): any;
