import * as runtime from '../runtime';
import { MerkleStateInfoDTOFromJSON, MultisigAccountGraphInfoDTOFromJSON, MultisigAccountInfoDTOFromJSON, } from '../models';
export class MultisigRoutesApi extends runtime.BaseAPI {
    async getAccountMultisigRaw(requestParameters, initOverrides) {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address', 'Required parameter requestParameters.address was null or undefined when calling getAccountMultisig.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/account/{address}/multisig`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MultisigAccountInfoDTOFromJSON(jsonValue));
    }
    async getAccountMultisig(requestParameters, initOverrides) {
        const response = await this.getAccountMultisigRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getAccountMultisigGraphRaw(requestParameters, initOverrides) {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address', 'Required parameter requestParameters.address was null or undefined when calling getAccountMultisigGraph.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/account/{address}/multisig/graph`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MultisigAccountGraphInfoDTOFromJSON));
    }
    async getAccountMultisigGraph(requestParameters, initOverrides) {
        const response = await this.getAccountMultisigGraphRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getAccountMultisigMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address', 'Required parameter requestParameters.address was null or undefined when calling getAccountMultisigMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/account/{address}/multisig/merkle`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getAccountMultisigMerkle(requestParameters, initOverrides) {
        const response = await this.getAccountMultisigMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
