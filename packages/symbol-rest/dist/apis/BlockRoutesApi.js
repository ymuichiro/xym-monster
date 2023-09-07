import * as runtime from '../runtime';
import { BlockInfoDTOFromJSON, BlockPageFromJSON, MerkleProofInfoDTOFromJSON, } from '../models';
export class BlockRoutesApi extends runtime.BaseAPI {
    async getBlockByHeightRaw(requestParameters, initOverrides) {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height', 'Required parameter requestParameters.height was null or undefined when calling getBlockByHeight.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/blocks/{height}`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BlockInfoDTOFromJSON(jsonValue));
    }
    async getBlockByHeight(requestParameters, initOverrides) {
        const response = await this.getBlockByHeightRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMerkleReceiptsRaw(requestParameters, initOverrides) {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height', 'Required parameter requestParameters.height was null or undefined when calling getMerkleReceipts.');
        }
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getMerkleReceipts.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/blocks/{height}/statements/{hash}/merkle`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))).replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleProofInfoDTOFromJSON(jsonValue));
    }
    async getMerkleReceipts(requestParameters, initOverrides) {
        const response = await this.getMerkleReceiptsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMerkleTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height', 'Required parameter requestParameters.height was null or undefined when calling getMerkleTransaction.');
        }
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash', 'Required parameter requestParameters.hash was null or undefined when calling getMerkleTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/blocks/{height}/transactions/{hash}/merkle`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))).replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleProofInfoDTOFromJSON(jsonValue));
    }
    async getMerkleTransaction(requestParameters, initOverrides) {
        const response = await this.getMerkleTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchBlocksRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }
        if (requestParameters.beneficiaryAddress !== undefined) {
            queryParameters['beneficiaryAddress'] = requestParameters.beneficiaryAddress;
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
        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/blocks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BlockPageFromJSON(jsonValue));
    }
    async searchBlocks(requestParameters = {}, initOverrides) {
        const response = await this.searchBlocksRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
