import type { BlockInfoDTO } from './BlockInfoDTO';
import type { Pagination } from './Pagination';
export interface BlockPage {
    data: Array<BlockInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfBlockPage(value: object): boolean;
export declare function BlockPageFromJSON(json: any): BlockPage;
export declare function BlockPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockPage;
export declare function BlockPageToJSON(value?: BlockPage | null): any;
