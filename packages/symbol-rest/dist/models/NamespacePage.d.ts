import type { NamespaceInfoDTO } from './NamespaceInfoDTO';
import type { Pagination } from './Pagination';
export interface NamespacePage {
    data: Array<NamespaceInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfNamespacePage(value: object): boolean;
export declare function NamespacePageFromJSON(json: any): NamespacePage;
export declare function NamespacePageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespacePage;
export declare function NamespacePageToJSON(value?: NamespacePage | null): any;
