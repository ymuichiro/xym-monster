import type { MetadataInfoDTO } from './MetadataInfoDTO';
import type { Pagination } from './Pagination';
export interface MetadataPage {
    data: Array<MetadataInfoDTO>;
    pagination: Pagination;
}
export declare function instanceOfMetadataPage(value: object): boolean;
export declare function MetadataPageFromJSON(json: any): MetadataPage;
export declare function MetadataPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataPage;
export declare function MetadataPageToJSON(value?: MetadataPage | null): any;
