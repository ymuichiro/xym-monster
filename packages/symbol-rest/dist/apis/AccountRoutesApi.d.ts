import * as runtime from '../runtime';
import type { AccountIds, AccountInfoDTO, AccountOrderByEnum, AccountPage, MerkleStateInfoDTO, Order } from '../models';
export interface GetAccountInfoRequest {
    accountId: string;
}
export interface GetAccountInfoMerkleRequest {
    accountId: string;
}
export interface GetAccountsInfoRequest {
    accountIds?: AccountIds;
}
export interface SearchAccountsRequest {
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
    orderBy?: AccountOrderByEnum;
    mosaicId?: string;
}
export declare class AccountRoutesApi extends runtime.BaseAPI {
    getAccountInfoRaw(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoDTO>>;
    getAccountInfo(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoDTO>;
    getAccountInfoMerkleRaw(requestParameters: GetAccountInfoMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getAccountInfoMerkle(requestParameters: GetAccountInfoMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    getAccountsInfoRaw(requestParameters: GetAccountsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AccountInfoDTO>>>;
    getAccountsInfo(requestParameters?: GetAccountsInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AccountInfoDTO>>;
    searchAccountsRaw(requestParameters: SearchAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountPage>>;
    searchAccounts(requestParameters?: SearchAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountPage>;
}
