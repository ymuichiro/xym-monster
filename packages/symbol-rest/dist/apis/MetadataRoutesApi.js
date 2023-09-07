import * as runtime from '../runtime';
import { MerkleStateInfoDTOFromJSON, MetadataInfoDTOFromJSON, MetadataPageFromJSON, } from '../models';
export class MetadataRoutesApi extends runtime.BaseAPI {
    async getMetadataRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getMetadata.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/metadata/{compositeHash}`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataInfoDTOFromJSON(jsonValue));
    }
    async getMetadata(requestParameters, initOverrides) {
        const response = await this.getMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMetadataMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.compositeHash === null || requestParameters.compositeHash === undefined) {
            throw new runtime.RequiredError('compositeHash', 'Required parameter requestParameters.compositeHash was null or undefined when calling getMetadataMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/metadata/{compositeHash}/merkle`.replace(`{${"compositeHash"}}`, encodeURIComponent(String(requestParameters.compositeHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getMetadataMerkle(requestParameters, initOverrides) {
        const response = await this.getMetadataMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchMetadataEntriesRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.sourceAddress !== undefined) {
            queryParameters['sourceAddress'] = requestParameters.sourceAddress;
        }
        if (requestParameters.targetAddress !== undefined) {
            queryParameters['targetAddress'] = requestParameters.targetAddress;
        }
        if (requestParameters.scopedMetadataKey !== undefined) {
            queryParameters['scopedMetadataKey'] = requestParameters.scopedMetadataKey;
        }
        if (requestParameters.targetId !== undefined) {
            queryParameters['targetId'] = requestParameters.targetId;
        }
        if (requestParameters.metadataType !== undefined) {
            queryParameters['metadataType'] = requestParameters.metadataType;
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
            path: `/metadata`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataPageFromJSON(jsonValue));
    }
    async searchMetadataEntries(requestParameters = {}, initOverrides) {
        const response = await this.searchMetadataEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
