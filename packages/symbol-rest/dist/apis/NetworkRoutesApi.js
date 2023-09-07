import * as runtime from '../runtime';
import { NetworkConfigurationDTOFromJSON, NetworkTypeDTOFromJSON, RentalFeesDTOFromJSON, TransactionFeesDTOFromJSON, } from '../models';
export class NetworkRoutesApi extends runtime.BaseAPI {
    async getNetworkPropertiesRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/network/properties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkConfigurationDTOFromJSON(jsonValue));
    }
    async getNetworkProperties(initOverrides) {
        const response = await this.getNetworkPropertiesRaw(initOverrides);
        return await response.value();
    }
    async getNetworkTypeRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/network`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkTypeDTOFromJSON(jsonValue));
    }
    async getNetworkType(initOverrides) {
        const response = await this.getNetworkTypeRaw(initOverrides);
        return await response.value();
    }
    async getRentalFeesRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/network/fees/rental`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => RentalFeesDTOFromJSON(jsonValue));
    }
    async getRentalFees(initOverrides) {
        const response = await this.getRentalFeesRaw(initOverrides);
        return await response.value();
    }
    async getTransactionFeesRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/network/fees/transaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFeesDTOFromJSON(jsonValue));
    }
    async getTransactionFees(initOverrides) {
        const response = await this.getTransactionFeesRaw(initOverrides);
        return await response.value();
    }
}
