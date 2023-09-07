import * as runtime from '../runtime';
import { MerkleStateInfoDTOFromJSON, SecretLockInfoDTOFromJSON, SecretLockPageFromJSON, } from '../models';
export class SecretLockRoutesApi extends runtime.BaseAPI {
    async getSecretLockRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getSecretLock.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/lock/secret/{compositeHash}`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => SecretLockInfoDTOFromJSON(jsonValue));
    }
    async getSecretLock(requestParameters, initOverrides) {
        const response = await this.getSecretLockRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getSecretLockMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getSecretLockMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/lock/secret/{compositeHash}/merkle`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getSecretLockMerkle(requestParameters, initOverrides) {
        const response = await this.getSecretLockMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchSecretLockRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }
        if (requestParameters.secret !== undefined) {
            queryParameters['secret'] = requestParameters.secret;
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
            path: `/lock/secret`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => SecretLockPageFromJSON(jsonValue));
    }
    async searchSecretLock(requestParameters = {}, initOverrides) {
        const response = await this.searchSecretLockRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
