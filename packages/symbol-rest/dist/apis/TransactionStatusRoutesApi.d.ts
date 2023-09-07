import * as runtime from '../runtime';
import type { TransactionHashes, TransactionStatusDTO } from '../models';
export interface GetTransactionStatusRequest {
    hash: string;
}
export interface GetTransactionStatusesRequest {
    transactionHashes: TransactionHashes;
}
export declare class TransactionStatusRoutesApi extends runtime.BaseAPI {
    getTransactionStatusRaw(requestParameters: GetTransactionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionStatusDTO>>;
    getTransactionStatus(requestParameters: GetTransactionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionStatusDTO>;
    getTransactionStatusesRaw(requestParameters: GetTransactionStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionStatusDTO>>>;
    getTransactionStatuses(requestParameters: GetTransactionStatusesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionStatusDTO>>;
}
