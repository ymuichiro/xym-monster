import * as runtime from '../runtime';
import type { AnnounceTransactionInfoDTO, Cosignature, Order, TransactionIds, TransactionInfoDTO, TransactionPage, TransactionPayload, TransactionTypeEnum } from '../models';
export interface AnnounceCosignatureTransactionRequest {
    cosignature: Cosignature;
}
export interface AnnouncePartialTransactionRequest {
    transactionPayload: TransactionPayload;
}
export interface AnnounceTransactionRequest {
    transactionPayload: TransactionPayload;
}
export interface GetConfirmedTransactionRequest {
    transactionId: string;
}
export interface GetConfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface GetPartialTransactionRequest {
    transactionId: string;
}
export interface GetPartialTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface GetUnconfirmedTransactionRequest {
    transactionId: string;
}
export interface GetUnconfirmedTransactionsRequest {
    transactionIds: TransactionIds;
}
export interface SearchConfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchPartialTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchUnconfirmedTransactionsRequest {
    address?: string;
    recipientAddress?: string;
    signerPublicKey?: string;
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    fromTransferAmount?: string;
    toTransferAmount?: string;
    type?: Array<TransactionTypeEnum>;
    embedded?: boolean;
    transferMosaicId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class TransactionRoutesApi extends runtime.BaseAPI {
    announceCosignatureTransactionRaw(requestParameters: AnnounceCosignatureTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    announceCosignatureTransaction(requestParameters: AnnounceCosignatureTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    announcePartialTransactionRaw(requestParameters: AnnouncePartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    announcePartialTransaction(requestParameters: AnnouncePartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    announceTransactionRaw(requestParameters: AnnounceTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnounceTransactionInfoDTO>>;
    announceTransaction(requestParameters: AnnounceTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnounceTransactionInfoDTO>;
    getConfirmedTransactionRaw(requestParameters: GetConfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    getConfirmedTransaction(requestParameters: GetConfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    getConfirmedTransactionsRaw(requestParameters: GetConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    getConfirmedTransactions(requestParameters: GetConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    getPartialTransactionRaw(requestParameters: GetPartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    getPartialTransaction(requestParameters: GetPartialTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    getPartialTransactionsRaw(requestParameters: GetPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    getPartialTransactions(requestParameters: GetPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    getUnconfirmedTransactionRaw(requestParameters: GetUnconfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInfoDTO>>;
    getUnconfirmedTransaction(requestParameters: GetUnconfirmedTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInfoDTO>;
    getUnconfirmedTransactionsRaw(requestParameters: GetUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionInfoDTO>>>;
    getUnconfirmedTransactions(requestParameters: GetUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionInfoDTO>>;
    searchConfirmedTransactionsRaw(requestParameters: SearchConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    searchConfirmedTransactions(requestParameters?: SearchConfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
    searchPartialTransactionsRaw(requestParameters: SearchPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    searchPartialTransactions(requestParameters?: SearchPartialTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
    searchUnconfirmedTransactionsRaw(requestParameters: SearchUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPage>>;
    searchUnconfirmedTransactions(requestParameters?: SearchUnconfirmedTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPage>;
}
