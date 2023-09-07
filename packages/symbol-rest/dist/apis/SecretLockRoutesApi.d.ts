import * as runtime from '../runtime';
import type { MerkleStateInfoDTO, Order, SecretLockInfoDTO, SecretLockPage } from '../models';
export interface GetSecretLockRequest {
    compositeHash: string;
}
export interface GetSecretLockMerkleRequest {
    compositeHash: string;
}
export interface SearchSecretLockRequest {
    address?: string;
    secret?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class SecretLockRoutesApi extends runtime.BaseAPI {
    getSecretLockRaw(requestParameters: GetSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecretLockInfoDTO>>;
    getSecretLock(requestParameters: GetSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecretLockInfoDTO>;
    getSecretLockMerkleRaw(requestParameters: GetSecretLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getSecretLockMerkle(requestParameters: GetSecretLockMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    searchSecretLockRaw(requestParameters: SearchSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecretLockPage>>;
    searchSecretLock(requestParameters?: SearchSecretLockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecretLockPage>;
}
