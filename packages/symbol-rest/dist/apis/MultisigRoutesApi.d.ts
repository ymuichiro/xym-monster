import * as runtime from '../runtime';
import type { MerkleStateInfoDTO, MultisigAccountGraphInfoDTO, MultisigAccountInfoDTO } from '../models';
export interface GetAccountMultisigRequest {
    address: string;
}
export interface GetAccountMultisigGraphRequest {
    address: string;
}
export interface GetAccountMultisigMerkleRequest {
    address: string;
}
export declare class MultisigRoutesApi extends runtime.BaseAPI {
    getAccountMultisigRaw(requestParameters: GetAccountMultisigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultisigAccountInfoDTO>>;
    getAccountMultisig(requestParameters: GetAccountMultisigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultisigAccountInfoDTO>;
    getAccountMultisigGraphRaw(requestParameters: GetAccountMultisigGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MultisigAccountGraphInfoDTO>>>;
    getAccountMultisigGraph(requestParameters: GetAccountMultisigGraphRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MultisigAccountGraphInfoDTO>>;
    getAccountMultisigMerkleRaw(requestParameters: GetAccountMultisigMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>>;
    getAccountMultisigMerkle(requestParameters: GetAccountMultisigMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO>;
}
