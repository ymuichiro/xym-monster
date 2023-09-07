import * as runtime from '../runtime';
import { MerkleStateInfoDTOFromJSON, MosaicRestrictionDTOFromJSON, MosaicRestrictionsPageFromJSON, } from '../models';
export class RestrictionMosaicRoutesApi extends runtime.BaseAPI {
    async getMosaicRestrictionsRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getMosaicRestrictions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/restrictions/mosaic/{compositeHash}`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicRestrictionDTOFromJSON(jsonValue));
    }
    async getMosaicRestrictions(requestParameters, initOverrides) {
        const response = await this.getMosaicRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMosaicRestrictionsMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getMosaicRestrictionsMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/restrictions/mosaic/{compositeHash}/merkle`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getMosaicRestrictionsMerkle(requestParameters, initOverrides) {
        const response = await this.getMosaicRestrictionsMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchMosaicRestrictionsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.mosaicId !== undefined) {
            queryParameters['mosaicId'] = requestParameters.mosaicId;
        }
        if (requestParameters.entryType !== undefined) {
            queryParameters['entryType'] = requestParameters.entryType;
        }
        if (requestParameters.targetAddress !== undefined) {
            queryParameters['targetAddress'] = requestParameters.targetAddress;
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
            path: `/restrictions/mosaic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicRestrictionsPageFromJSON(jsonValue));
    }
    async searchMosaicRestrictions(requestParameters = {}, initOverrides) {
        const response = await this.searchMosaicRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
