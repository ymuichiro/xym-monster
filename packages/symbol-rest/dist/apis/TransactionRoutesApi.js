import * as runtime from '../runtime';
import { AnnounceTransactionInfoDTOFromJSON, CosignatureToJSON, TransactionIdsToJSON, TransactionInfoDTOFromJSON, TransactionPageFromJSON, TransactionPayloadToJSON, } from '../models';
export class TransactionRoutesApi extends runtime.BaseAPI {
    async announceCosignatureTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.cosignature === null || requestParameters.cosignature === undefined) {
            throw new runtime.RequiredError('cosignature', 'Required parameter requestParameters.cosignature was null or undefined when calling announceCosignatureTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions/cosignature`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CosignatureToJSON(requestParameters.cosignature),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }
    async announceCosignatureTransaction(requestParameters, initOverrides) {
        const response = await this.announceCosignatureTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async announcePartialTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionPayload === null || requestParameters.transactionPayload === undefined) {
            throw new runtime.RequiredError('transactionPayload', 'Required parameter requestParameters.transactionPayload was null or undefined when calling announcePartialTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions/partial`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPayloadToJSON(requestParameters.transactionPayload),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }
    async announcePartialTransaction(requestParameters, initOverrides) {
        const response = await this.announcePartialTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async announceTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionPayload === null || requestParameters.transactionPayload === undefined) {
            throw new runtime.RequiredError('transactionPayload', 'Required parameter requestParameters.transactionPayload was null or undefined when calling announceTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPayloadToJSON(requestParameters.transactionPayload),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AnnounceTransactionInfoDTOFromJSON(jsonValue));
    }
    async announceTransaction(requestParameters, initOverrides) {
        const response = await this.announceTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getConfirmedTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling getConfirmedTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/transactions/confirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }
    async getConfirmedTransaction(requestParameters, initOverrides) {
        const response = await this.getConfirmedTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getConfirmedTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds', 'Required parameter requestParameters.transactionIds was null or undefined when calling getConfirmedTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions/confirmed`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }
    async getConfirmedTransactions(requestParameters, initOverrides) {
        const response = await this.getConfirmedTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getPartialTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling getPartialTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/transactions/partial/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }
    async getPartialTransaction(requestParameters, initOverrides) {
        const response = await this.getPartialTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getPartialTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds', 'Required parameter requestParameters.transactionIds was null or undefined when calling getPartialTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions/partial`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }
    async getPartialTransactions(requestParameters, initOverrides) {
        const response = await this.getPartialTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getUnconfirmedTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling getUnconfirmedTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/transactions/unconfirmed/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInfoDTOFromJSON(jsonValue));
    }
    async getUnconfirmedTransaction(requestParameters, initOverrides) {
        const response = await this.getUnconfirmedTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getUnconfirmedTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.transactionIds === null || requestParameters.transactionIds === undefined) {
            throw new runtime.RequiredError('transactionIds', 'Required parameter requestParameters.transactionIds was null or undefined when calling getUnconfirmedTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/transactions/unconfirmed`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionIdsToJSON(requestParameters.transactionIds),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionInfoDTOFromJSON));
    }
    async getUnconfirmedTransactions(requestParameters, initOverrides) {
        const response = await this.getUnconfirmedTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchConfirmedTransactionsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }
        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }
        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }
        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }
        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }
        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }
        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }
        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/confirmed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }
    async searchConfirmedTransactions(requestParameters = {}, initOverrides) {
        const response = await this.searchConfirmedTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchPartialTransactionsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }
        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }
        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }
        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }
        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }
        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }
        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }
        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/partial`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }
    async searchPartialTransactions(requestParameters = {}, initOverrides) {
        const response = await this.searchPartialTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async searchUnconfirmedTransactionsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }
        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipientAddress'] = requestParameters.recipientAddress;
        }
        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }
        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }
        if (requestParameters.fromHeight !== undefined) {
            queryParameters['fromHeight'] = requestParameters.fromHeight;
        }
        if (requestParameters.toHeight !== undefined) {
            queryParameters['toHeight'] = requestParameters.toHeight;
        }
        if (requestParameters.fromTransferAmount !== undefined) {
            queryParameters['fromTransferAmount'] = requestParameters.fromTransferAmount;
        }
        if (requestParameters.toTransferAmount !== undefined) {
            queryParameters['toTransferAmount'] = requestParameters.toTransferAmount;
        }
        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }
        if (requestParameters.transferMosaicId !== undefined) {
            queryParameters['transferMosaicId'] = requestParameters.transferMosaicId;
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
            path: `/transactions/unconfirmed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPageFromJSON(jsonValue));
    }
    async searchUnconfirmedTransactions(requestParameters = {}, initOverrides) {
        const response = await this.searchUnconfirmedTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
