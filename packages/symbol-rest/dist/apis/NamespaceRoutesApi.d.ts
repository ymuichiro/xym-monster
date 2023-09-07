import * as runtime from '../runtime';
import type { AccountsNamesDTO, Addresses, AliasTypeEnum, MerkleStateInfoDTO, MosaicIds, MosaicsNamesDTO, NamespaceIds, NamespaceInfoDTO, NamespaceNameDTO, NamespacePage, NamespaceRegistrationTypeEnum, Order } from '../models';
export interface GetAccountsNamesRequest {
    addresses: Addresses;
}
export interface GetMosaicsNamesRequest {
    mosaicIds: MosaicIds;
}
export interface GetNamespaceRequest {
    namespaceId: string;
}
export interface GetNamespaceMerkleRequest {
    namespaceId: string;
}
export interface GetNamespacesNamesRequest {
    namespaceIds: NamespaceIds;
}
export interface SearchNamespacesRequest {
    ownerAddress?: string;
    registrationType?: NamespaceRegistrationTypeEnum;
    level0?: string;
    aliasType?: AliasTypeEnum;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class NamespaceRoutesApi extends runtime.BaseAPI {
    getAccountsNamesRaw(requestParameters: GetAccountsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountsNamesDTO>>;
    getAccountsNames(requestParameters: GetAccountsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountsNamesDTO>;
    getMosaicsNamesRaw(requestParameters: GetMosaicsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MosaicsNamesDTO>>;
    getMosaicsNames(requestParameters: GetMosaicsNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MosaicsNamesDTO>;
    getNamespaceRaw(requestParameters: GetNamespaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NamespaceInfoDTO>>;
    getNamespace(requestParameters: GetNamespaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NamespaceInfoDTO>;
    getNamespaceMerkleRaw(requestParameters: GetNamespaceMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getNamespaceMerkle(requestParameters: GetNamespaceMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
    getNamespacesNamesRaw(requestParameters: GetNamespacesNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NamespaceNameDTO>>>;
    getNamespacesNames(requestParameters: GetNamespacesNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NamespaceNameDTO>>;
    searchNamespacesRaw(requestParameters: SearchNamespacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NamespacePage>>;
    searchNamespaces(requestParameters?: SearchNamespacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NamespacePage>;
}
