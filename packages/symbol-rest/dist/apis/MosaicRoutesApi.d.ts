import * as runtime from '../runtime';
import type { MerkleStateInfoDTO, MosaicIds, MosaicInfoDTO, MosaicPage, Order } from '../models';
export interface GetMosaicRequest {
    mosaicId: string;
}
export interface GetMosaicMerkleRequest {
    mosaicId: string;
}
export interface GetMosaicsRequest {
    mosaicIds: MosaicIds;
}
export interface SearchMosaicsRequest {
    ownerAddress?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class MosaicRoutesApi extends runtime.BaseAPI {
    getMosaicRaw(requestParameters: GetMosaicRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicInfoDTO>>;
    getMosaic(requestParameters: GetMosaicRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicInfoDTO>;
    getMosaicMerkleRaw(requestParameters: GetMosaicMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getMosaicMerkle(requestParameters: GetMosaicMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    getMosaicsRaw(requestParameters: GetMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MosaicInfoDTO>>>;
    getMosaics(requestParameters: GetMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MosaicInfoDTO>>;
    searchMosaicsRaw(requestParameters: SearchMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicPage>>;
    searchMosaics(requestParameters?: SearchMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicPage>;
}
