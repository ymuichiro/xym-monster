import * as runtime from '../runtime';
import { AccountRestrictionsInfoDTOFromJSON, AccountRestrictionsPageFromJSON, MerkleStateInfoDTOFromJSON, } from '../models';
export class RestrictionAccountRoutesApi extends runtime.BaseAPI {
    async getAccountRestrictionsRaw(requestParameters, initOverrides) {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address', 'Required parameter requestParameters.address was null or undefined when calling getAccountRestrictions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/restrictions/account/{address}`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRestrictionsInfoDTOFromJSON(jsonValue));
    }
    async getAccountRestrictions(requestParameters, initOverrides) {
        const response = await this.getAccountRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getAccountRestrictionsMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address', 'Required parameter requestParameters.address was null or undefined when calling getAccountRestrictionsMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/restrictions/account/{address}/merkle`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getAccountRestrictionsMerkle(requestParameters, initOverrides) {
        const response = await this.getAccountRestrictionsMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchAccountRestrictionsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
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
            path: `/restrictions/account`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRestrictionsPageFromJSON(jsonValue));
    }
    async searchAccountRestrictions(requestParameters = {}, initOverrides) {
        const response = await this.searchAccountRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
