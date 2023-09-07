import * as runtime from '../runtime';
import type { MerkleStateInfoDTO, MetadataInfoDTO, MetadataPage, MetadataTypeEnum, Order } from '../models';
export interface GetMetadataRequest {
    compositeHash: string;
}
export interface GetMetadataMerkleRequest {
    compositeHash: string;
}
export interface SearchMetadataEntriesRequest {
    sourceAddress?: string;
    targetAddress?: string;
    scopedMetadataKey?: string;
    targetId?: string;
    metadataType?: MetadataTypeEnum;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class MetadataRoutesApi extends runtime.BaseAPI {
    getMetadataRaw(requestParameters: GetMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetadataInfoDTO>>;
    getMetadata(requestParameters: GetMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetadataInfoDTO>;
    getMetadataMerkleRaw(requestParameters: GetMetadataMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getMetadataMerkle(requestParameters: GetMetadataMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    searchMetadataEntriesRaw(requestParameters: SearchMetadataEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetadataPage>>;
    searchMetadataEntries(requestParameters?: SearchMetadataEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetadataPage>;
}
