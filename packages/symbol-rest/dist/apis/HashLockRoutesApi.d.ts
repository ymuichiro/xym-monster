import * as runtime from '../runtime';
import type { HashLockInfoDTO, HashLockPage, MerkleStateInfoDTO, Order } from '../models';
export interface GetHashLockRequest {
    hash: string;
}
export interface GetHashLockMerkleRequest {
    hash: string;
}
export interface SearchHashLockRequest {
    address?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class HashLockRoutesApi extends runtime.BaseAPI {
    getHashLockRaw(requestParameters: GetHashLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HashLockInfoDTO>>;
    getHashLock(requestParameters: GetHashLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HashLockInfoDTO>;
    getHashLockMerkleRaw(requestParameters: GetHashLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getHashLockMerkle(requestParameters: GetHashLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    searchHashLockRaw(requestParameters: SearchHashLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HashLockPage>>;
    searchHashLock(requestParameters?: SearchHashLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HashLockPage>;
}
