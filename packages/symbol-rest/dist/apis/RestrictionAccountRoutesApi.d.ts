import * as runtime from '../runtime';
import type { AccountRestrictionsInfoDTO, AccountRestrictionsPage, MerkleStateInfoDTO, Order } from '../models';
export interface GetAccountRestrictionsRequest {
    address: string;
}
export interface GetAccountRestrictionsMerkleRequest {
    address: string;
}
export interface SearchAccountRestrictionsRequest {
    address?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class RestrictionAccountRoutesApi extends runtime.BaseAPI {
    getAccountRestrictionsRaw(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsInfoDTO>>;
    getAccountRestrictions(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsInfoDTO>;
    getAccountRestrictionsMerkleRaw(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getAccountRestrictionsMerkle(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    searchAccountRestrictionsRaw(requestParameters: SearchAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsPage>>;
    searchAccountRestrictions(requestParameters?: SearchAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsPage>;
}
