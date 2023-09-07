import type { MosaicInfoDTO } from './MosaicInfoDTO';
import type { Pagination } from './Pagination';
export interface MosaicPage {
    data: Array<MosaicInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfMosaicPage(value: object): boolean;
export declare function MosaicPageFromJSON(json: any): MosaicPage;
export declare function MosaicPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicPage;
export declare function MosaicPageToJSON(value?: MosaicPage | null): any;
