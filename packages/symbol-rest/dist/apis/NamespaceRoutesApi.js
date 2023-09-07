import * as runtime from '../runtime';
import { AccountsNamesDTOFromJSON, AddressesToJSON, MerkleStateInfoDTOFromJSON, MosaicIdsToJSON, MosaicsNamesDTOFromJSON, NamespaceIdsToJSON, NamespaceInfoDTOFromJSON, NamespaceNameDTOFromJSON, NamespacePageFromJSON, } from '../models';
export class NamespaceRoutesApi extends runtime.BaseAPI {
    async getAccountsNamesRaw(requestParameters, initOverrides) {
        if (requestParameters.addresses === null || requestParameters.addresses === undefined) {
            throw new runtime.RequiredError('addresses', 'Required parameter requestParameters.addresses was null or undefined when calling getAccountsNames.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/namespaces/account/names`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddressesToJSON(requestParameters.addresses),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AccountsNamesDTOFromJSON(jsonValue));
    }
    async getAccountsNames(requestParameters, initOverrides) {
        const response = await this.getAccountsNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getMosaicsNamesRaw(requestParameters, initOverrides) {
        if (requestParameters.mosaicIds === null || requestParameters.mosaicIds === undefined) {
            throw new runtime.RequiredError('mosaicIds', 'Required parameter requestParameters.mosaicIds was null or undefined when calling getMosaicsNames.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/namespaces/mosaic/names`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MosaicIdsToJSON(requestParameters.mosaicIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicsNamesDTOFromJSON(jsonValue));
    }
    async getMosaicsNames(requestParameters, initOverrides) {
        const response = await this.getMosaicsNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getNamespaceRaw(requestParameters, initOverrides) {
        if (requestParameters.namespaceId === null || requestParameters.namespaceId === undefined) {
            throw new runtime.RequiredError('namespaceId', 'Required parameter requestParameters.namespaceId was null or undefined when calling getNamespace.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/namespaces/{namespaceId}`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NamespaceInfoDTOFromJSON(jsonValue));
    }
    async getNamespace(requestParameters, initOverrides) {
        const response = await this.getNamespaceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getNamespaceMerkleRaw(requestParameters, initOverrides) {
        if (requestParameters.namespaceId === null || requestParameters.namespaceId === undefined) {
            throw new runtime.RequiredError('namespaceId', 'Required parameter requestParameters.namespaceId was null or undefined when calling getNamespaceMerkle.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/namespaces/{namespaceId}/merkle`.replace(`{${"namespaceId"}}`, encodeURIComponent(String(requestParameters.namespaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }
    async getNamespaceMerkle(requestParameters, initOverrides) {
        const response = await this.getNamespaceMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getNamespacesNamesRaw(requestParameters, initOverrides) {
        if (requestParameters.namespaceIds === null || requestParameters.namespaceIds === undefined) {
            throw new runtime.RequiredError('namespaceIds', 'Required parameter requestParameters.namespaceIds was null or undefined when calling getNamespacesNames.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/namespaces/names`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NamespaceIdsToJSON(requestParameters.namespaceIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NamespaceNameDTOFromJSON));
    }
    async getNamespacesNames(requestParameters, initOverrides) {
        const response = await this.getNamespacesNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchNamespacesRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.ownerAddress !== undefined) {
            queryParameters['ownerAddress'] = requestParameters.ownerAddress;
        }
        if (requestParameters.registrationType !== undefined) {
            queryParameters['registrationType'] = requestParameters.registrationType;
        }
        if (requestParameters.level0 !== undefined) {
            queryParameters['level0'] = requestParameters.level0;
        }
        if (requestParameters.aliasType !== undefined) {
            queryParameters['aliasType'] = requestParameters.aliasType;
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
            path: `/namespaces`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NamespacePageFromJSON(jsonValue));
    }
    async searchNamespaces(requestParameters = {}, initOverrides) {
        const response = await this.searchNamespacesRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
