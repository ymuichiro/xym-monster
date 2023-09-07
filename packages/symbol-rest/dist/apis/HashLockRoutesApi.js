import * as runtime from '../runtime';
import { HashLockInfoDTOFromJSON, HashLockPageFromJSON, MerkleStateInfoDTOFromJSON, } from '../models';
export class HashLockRoutesApi extends runtime.BaseAPI {
    async getHashLockRaw(requestParameters, initOverrides) {
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getHashLock.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/lock/hash/{hash}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => HashLockInfoDTOFromJSON(jsonValue));
    }
    async getHashLock(requestParameters, initOverrides) {
        const response = await this.getHashLockRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getHashLockMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getHashLockMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/lock/hash/{hash}/merkle`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getHashLockMerkle(requestParameters, initOverrides) {
        const response = await this.getHashLockMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchHashLockRaw(requestParameters, initOverrides) {
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
            path: `/lock/hash`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => HashLockPageFromJSON(jsonValue));
    }
    async searchHashLock(requestParameters = {}, initOverrides) {
        const response = await this.searchHashLockRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
