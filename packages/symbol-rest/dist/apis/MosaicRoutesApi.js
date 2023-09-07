import * as runtime from '../runtime';
import { MerkleStateInfoDTOFromJSON, MosaicIdsToJSON, MosaicInfoDTOFromJSON, MosaicPageFromJSON, } from '../models';
export class MosaicRoutesApi extends runtime.BaseAPI {
    async getMosaicRaw(requestParameters, initOverrides) {
        if (requestParameters.mosaicId === null || requestParameters.mosaicId === undefined) {
            throw new runtime.RequiredError('mosaicId', 'Required parameter requestParameters.mosaicId was null or undefined when calling getMosaic.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/mosaics/{mosaicId}`.replace(`{${"mosaicId"}}`, encodeURIComponent(String(requestParameters.mosaicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicInfoDTOFromJSON(jsonValue));
    }
    async getMosaic(requestParameters, initOverrides) {
        const response = await this.getMosaicRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMosaicMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.mosaicId === null || requestParameters.mosaicId === undefined) {
            throw new runtime.RequiredError('mosaicId', 'Required parameter requestParameters.mosaicId was null or undefined when calling getMosaicMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/mosaics/{mosaicId}/merkle`.replace(`{${"mosaicId"}}`, encodeURIComponent(String(requestParameters.mosaicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getMosaicMerkle(requestParameters, initOverrides) {
        const response = await this.getMosaicMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMosaicsRaw(requestParameters, initOverrides) {
        if (requestParameters.mosaicIds === null || requestParameters.mosaicIds === undefined) {
            throw new runtime.RequiredError('mosaicIds', 'Required parameter requestParameters.mosaicIds was null or undefined when calling getMosaics.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/mosaics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MosaicIdsToJSON(requestParameters.mosaicIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MosaicInfoDTOFromJSON));
    }
    async getMosaics(requestParameters, initOverrides) {
        const response = await this.getMosaicsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchMosaicsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.ownerAddress !== undefined) {
            queryParameters['ownerAddress'] = requestParameters.ownerAddress;
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
            path: `/mosaics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicPageFromJSON(jsonValue));
    }
    async searchMosaics(requestParameters = {}, initOverrides) {
        const response = await this.searchMosaicsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
