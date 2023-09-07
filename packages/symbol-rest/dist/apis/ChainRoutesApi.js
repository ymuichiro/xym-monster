import * as runtime from '../runtime';
import { ChainInfoDTOFromJSON, } from '../models';
export class ChainRoutesApi extends runtime.BaseAPI {
    async getChainInfoRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/chain/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ChainInfoDTOFromJSON(jsonValue));
    }
    async getChainInfo(initOverrides) {
        const response = await this.getChainInfoRaw(initOverrides);
        return await response.value();
    }
}
