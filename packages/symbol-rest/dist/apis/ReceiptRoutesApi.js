import * as runtime from '../runtime';
import { ResolutionStatementPageFromJSON, TransactionStatementPageFromJSON, } from '../models';
export class ReceiptRoutesApi extends runtime.BaseAPI {
    async searchAddressResolutionStatementsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }
        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }
        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }
        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/statements/resolutions/address`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ResolutionStatementPageFromJSON(jsonValue));
    }
    async searchAddressResolutionStatements(requestParameters = {}, initOverrides) {
        const response = await this.searchAddressResolutionStatementsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchMosaicResolutionStatementsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }
        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }
        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }
        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/statements/resolutions/mosaic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ResolutionStatementPageFromJSON(jsonValue));
    }
    async searchMosaicResolutionStatements(requestParameters = {}, initOverrides) {
        const response = await this.searchMosaicResolutionStatementsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchReceiptsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }
        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }
        if (requestParameters.receiptType) {
            queryParameters['receiptType'] = requestParameters.receiptType;
        }
        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }
        if (requestParameters.senderAddress !== undefined) {
            queryParameters['senderAddress'] = requestParameters.senderAddress;
        }
        if (requestParameters.targetAddress !== undefined) {
            queryParameters['targetAddress'] = requestParameters.targetAddress;
        }
        if (requestParameters.artifactId !== undefined) {
            queryParameters['artifactId'] = requestParameters.artifactId;
        }
        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }
        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }
        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }
        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/statements/transaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionStatementPageFromJSON(jsonValue));
    }
    async searchReceipts(requestParameters = {}, initOverrides) {
        const response = await this.searchReceiptsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
