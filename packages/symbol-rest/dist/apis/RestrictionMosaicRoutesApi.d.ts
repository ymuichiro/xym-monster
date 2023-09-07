import * as runtime from '../runtime';
import type { MerkleStateInfoDTO, MosaicRestrictionDTO, MosaicRestrictionEntryTypeEnum, MosaicRestrictionsPage, Order } from '../models';
export interface GetMosaicRestrictionsRequest {
    compositeHash: string;
}
export interface GetMosaicRestrictionsMerkleRequest {
    compositeHash: string;
}
export interface SearchMosaicRestrictionsRequest {
    mosaicId?: string;
    entryType?: MosaicRestrictionEntryTypeEnum;
    targetAddress?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class RestrictionMosaicRoutesApi extends runtime.BaseAPI {
    getMosaicRestrictionsRaw(requestParameters: GetMosaicRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicRestrictionDTO>>;
    getMosaicRestrictions(requestParameters: GetMosaicRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicRestrictionDTO>;
    getMosaicRestrictionsMerkleRaw(requestParameters: GetMosaicRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getMosaicRestrictionsMerkle(requestParameters: GetMosaicRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    searchMosaicRestrictionsRaw(requestParameters: SearchMosaicRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicRestrictionsPage>>;
    searchMosaicRestrictions(requestParameters?: SearchMosaicRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicRestrictionsPage>;
}
