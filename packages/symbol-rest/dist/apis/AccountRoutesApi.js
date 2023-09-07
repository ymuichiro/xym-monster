import * as runtime from '../runtime';
import { AccountIdsToJSON, AccountInfoDTOFromJSON, AccountPageFromJSON, MerkleStateInfoDTOFromJSON, } from '../models';
export class AccountRoutesApi extends runtime.BaseAPI {
    async getAccountInfoRaw(requestParameters, initOverrides) {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountInfo.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/accounts/{accountId}`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AccountInfoDTOFromJSON(jsonValue));
    }
    async getAccountInfo(requestParameters, initOverrides) {
        const response = await this.getAccountInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getAccountInfoMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountInfoMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/accounts/{accountId}/merkle`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getAccountInfoMerkle(requestParameters, initOverrides) {
        const response = await this.getAccountInfoMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getAccountsInfoRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountIdsToJSON(requestParameters.accountIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountInfoDTOFromJSON));
    }
    async getAccountsInfo(requestParameters = {}, initOverrides) {
        const response = await this.getAccountsInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchAccountsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
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
        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }
        if (requestParameters.mosaicId !== undefined) {
            queryParameters['mosaicId'] = requestParameters.mosaicId;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AccountPageFromJSON(jsonValue));
    }
    async searchAccounts(requestParameters = {}, initOverrides) {
        const response = await this.searchAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
