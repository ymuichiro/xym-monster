export interface Pagination {
    pageNumber: number;
    pageSize: number;
}
export declare function instanceOfPagination(value: object): boolean;
export declare function PaginationFromJSON(json: any): Pagination;
export declare function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination;
export declare function PaginationToJSON(value?: Pagination | null): any;
