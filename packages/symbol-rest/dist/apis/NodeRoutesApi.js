import * as runtime from '../runtime';
import { NodeHealthInfoDTOFromJSON, NodeInfoDTOFromJSON, NodeTimeDTOFromJSON, ServerInfoDTOFromJSON, StorageInfoDTOFromJSON, UnlockedAccountDTOFromJSON, } from '../models';
export class NodeRoutesApi extends runtime.BaseAPI {
    async getNodeHealthRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NodeHealthInfoDTOFromJSON(jsonValue));
    }
    async getNodeHealth(initOverrides) {
        const response = await this.getNodeHealthRaw(initOverrides);
        return await response.value();
    }
    async getNodeInfoRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NodeInfoDTOFromJSON(jsonValue));
    }
    async getNodeInfo(initOverrides) {
        const response = await this.getNodeInfoRaw(initOverrides);
        return await response.value();
    }
    async getNodePeersRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/peers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NodeInfoDTOFromJSON));
    }
    async getNodePeers(initOverrides) {
        const response = await this.getNodePeersRaw(initOverrides);
        return await response.value();
    }
    async getNodeStorageRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/storage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => StorageInfoDTOFromJSON(jsonValue));
    }
    async getNodeStorage(initOverrides) {
        const response = await this.getNodeStorageRaw(initOverrides);
        return await response.value();
    }
    async getNodeTimeRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/time`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NodeTimeDTOFromJSON(jsonValue));
    }
    async getNodeTime(initOverrides) {
        const response = await this.getNodeTimeRaw(initOverrides);
        return await response.value();
    }
    async getServerInfoRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/server`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ServerInfoDTOFromJSON(jsonValue));
    }
    async getServerInfo(initOverrides) {
        const response = await this.getServerInfoRaw(initOverrides);
        return await response.value();
    }
    async getUnlockedAccountRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/node/unlockedaccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => UnlockedAccountDTOFromJSON(jsonValue));
    }
    async getUnlockedAccount(initOverrides) {
        const response = await this.getUnlockedAccountRaw(initOverrides);
        return await response.value();
    }
}
