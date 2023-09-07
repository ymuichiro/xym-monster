import * as runtime from '../runtime';
import type { Order, ReceiptTypeEnum, ResolutionStatementPage, TransactionStatementPage } from '../models';
export interface SearchAddressResolutionStatementsRequest {
    height?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchMosaicResolutionStatementsRequest {
    height?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export interface SearchReceiptsRequest {
    height?: string;
    fromHeight?: string;
    toHeight?: string;
    receiptType?: Array<ReceiptTypeEnum>;
    recipientAddress?: string;
    senderAddress?: string;
    targetAddress?: string;
    artifactId?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}
export declare class ReceiptRoutesApi extends runtime.BaseAPI {
    searchAddressResolutionStatementsRaw(requestParameters: SearchAddressResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolutionStatementPage>>;
    searchAddressResolutionStatements(requestParameters?: SearchAddressResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolutionStatementPage>;
    searchMosaicResolutionStatementsRaw(requestParameters: SearchMosaicResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolutionStatementPage>>;
    searchMosaicResolutionStatements(requestParameters?: SearchMosaicResolutionStatementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolutionStatementPage>;
    searchReceiptsRaw(requestParameters: SearchReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionStatementPage>>;
    searchReceipts(requestParameters?: SearchReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionStatementPage>;
}
