import * as runtime from '../runtime';
import { TransactionHashesToJSON, TransactionStatusDTOFromJSON, } from '../models';
export class TransactionStatusRoutesApi extends runtime.BaseAPI {
    async getTransactionStatusRaw(requestParameters, initOverrides) {
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getTransactionStatus.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/transactionStatus/{hash}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionStatusDTOFromJSON(jsonValue));
    }
    async getTransactionStatus(requestParameters, initOverrides) {
        const response = await this.getTransactionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getTransactionStatusesRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionHashes === null || requestParameters.transactionHashes === undefined) {
            throw new runtime.RequiredError('transactionHashes', 'Required parameter requestParameters.transactionHashes was null or undefined when calling getTransactionStatuses.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactionStatus`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionHashesToJSON(requestParameters.transactionHashes),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionStatusDTOFromJSON));
    }
    async getTransactionStatuses(requestParameters, initOverrides) {
        const response = await this.getTransactionStatusesRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
