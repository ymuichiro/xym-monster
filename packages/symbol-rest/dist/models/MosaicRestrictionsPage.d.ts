import type { MosaicRestrictionsPageDataInner } from './MosaicRestrictionsPageDataInner';
import type { Pagination } from './Pagination';
export interface MosaicRestrictionsPage {
    data: Array<MosaicRestrictionsPageDataInner>;
    pagination: Pagination;
}
export declare function instanceOfMosaicRestrictionsPage(value: object): boolean;
export declare function MosaicRestrictionsPageFromJSON(json: any): MosaicRestrictionsPage;
export declare function MosaicRestrictionsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionsPage;
export declare function MosaicRestrictionsPageToJSON(value?: MosaicRestrictionsPage | null): any;
