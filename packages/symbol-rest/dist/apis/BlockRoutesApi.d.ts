import * as runtime from '../runtime';
import type { BlockInfoDTO, BlockOrderByEnum, BlockPage, MerkleProofInfoDTO, Order } from '../models';
export interface GetBlockByHeightRequest {
    height: string;
}
export interface GetMerkleReceiptsRequest {
    height: string;
    hash: string;
}
export interface GetMerkleTransactionRequest {
    height: string;
    hash: string;
}
export interface SearchBlocksRequest {
    signerPublicKey?: string;
    beneficiaryAddress?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
    orderBy?: BlockOrderByEnum;
}
export declare class BlockRoutesApi extends runtime.BaseAPI {
    getBlockByHeightRaw(requestParameters: GetBlockByHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockInfoDTO>>;
    getBlockByHeight(requestParameters: GetBlockByHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockInfoDTO>;
    getMerkleReceiptsRaw(requestParameters: GetMerkleReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleProofInfoDTO>>;
    getMerkleReceipts(requestParameters: GetMerkleReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleProofInfoDTO>;
    getMerkleTransactionRaw(requestParameters: GetMerkleTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleProofInfoDTO>>;
    getMerkleTransaction(requestParameters: GetMerkleTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleProofInfoDTO>;
    searchBlocksRaw(requestParameters: SearchBlocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockPage>>;
    searchBlocks(requestParameters?: SearchBlocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockPage>;
}
