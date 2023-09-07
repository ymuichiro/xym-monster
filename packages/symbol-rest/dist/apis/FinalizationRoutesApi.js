import * as runtime from '../runtime';
import { FinalizationProofDTOFromJSON, } from '../models';
export class FinalizationRoutesApi extends runtime.BaseAPI {
    async getFinalizationProofAtEpochRaw(requestParameters, initOverrides) {
        if (requestParameters.epoch === null || requestParameters.epoch === undefined) {
            throw new runtime.RequiredError('epoch', 'Required parameter requestParameters.epoch was null or undefined when calling getFinalizationProofAtEpoch.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/finalization/proof/epoch/{epoch}`.replace(`{${"epoch"}}`, encodeURIComponent(String(requestParameters.epoch))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => FinalizationProofDTOFromJSON(jsonValue));
    }
    async getFinalizationProofAtEpoch(requestParameters, initOverrides) {
        const response = await this.getFinalizationProofAtEpochRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getFinalizationProofAtHeightRaw(requestParameters, initOverrides) {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height', 'Required parameter requestParameters.height was null or undefined when calling getFinalizationProofAtHeight.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/finalization/proof/height/{height}`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => FinalizationProofDTOFromJSON(jsonValue));
    }
    async getFinalizationProofAtHeight(requestParameters, initOverrides) {
        const response = await this.getFinalizationProofAtHeightRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
