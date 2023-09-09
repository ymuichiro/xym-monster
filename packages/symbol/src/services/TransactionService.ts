import {
  AnnounceCosignatureTransactionRequest,
  AnnouncePartialTransactionRequest,
  Configuration,
  SearchConfirmedTransactionsRequest,
  TransactionRoutesApi,
} from 'symbol-rest';

import TreasureData from '../models/TreasureData'

export default class TransactionService {
  static async getConfirmedTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionRaw = await transactionRoutesApi.getConfirmedTransactionRaw({ transactionId: transactionId });
      return await transactionRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.getConfirmedTransaction.name} error}`);
      }
    }
  }

  static async getUnconfirmedTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionRaw = await transactionRoutesApi.getUnconfirmedTransactionRaw({ transactionId: transactionId });
      return await transactionRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.getUnconfirmedTransaction.name} error}`);
      }
    }
  }

  static async getPartialTransaction(node: string, transactionId: string) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionRaw = await transactionRoutesApi.getPartialTransactionRaw({ transactionId: transactionId });
      return await transactionRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.getPartialTransaction.name} error}`);
      }
    }
  }

  static async searchConfirmedTransactions(
    node: string,
    searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}
  ) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionsRaw = await transactionRoutesApi.searchConfirmedTransactionsRaw(
        searchConfirmedTransactionsRequest
      );
      return await transactionsRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.searchConfirmedTransactions.name} error}`);
      }
    }
  }

  static async searchUnconfirmedTransactions(
    node: string,
    searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}
  ) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionsRaw = await transactionRoutesApi.searchUnconfirmedTransactionsRaw(
        searchConfirmedTransactionsRequest
      );
      return await transactionsRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.searchUnconfirmedTransactions.name} error}`);
      }
    }
  }

  static async searchPartialTransactions(
    node: string,
    searchConfirmedTransactionsRequest: SearchConfirmedTransactionsRequest = {}
  ) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      const transactionsRaw = await transactionRoutesApi.searchPartialTransactionsRaw(
        searchConfirmedTransactionsRequest
      );
      return await transactionsRaw.raw.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.searchPartialTransactions.name} error}`);
      }
    }
  }

  static async announceCosignatureTransaction(node: string, requestParameters: AnnounceCosignatureTransactionRequest) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      return await transactionRoutesApi.announceCosignatureTransaction(requestParameters);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.announceCosignatureTransaction.name} error}`);
      }
    }
  }

  static async announcePartialTransaction(node: string, requestParameters: AnnouncePartialTransactionRequest) {
    try {
      const transactionRoutesApi = new TransactionRoutesApi(
        new Configuration({
          basePath: node,
        })
      );
      return await transactionRoutesApi.announcePartialTransaction(requestParameters);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.announcePartialTransaction.name} error}`);
      }
    }
  }

  static async announceTransaction(node: string, backendUrl: string, payload: string): Promise<{ payload: string, hash: string } | { error: any }> {
    try {
      const _WebSocket = typeof window === 'undefined' ? WebSocket : window.WebSocket || WebSocket;
      const wsNode = node.replace('https', 'wss') + '/ws';
      const ws = new _WebSocket(wsNode);

      const data = {
        payload,
      };

      const getHashOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const url = new URL(`${backendUrl}/api/transactions/getHash`);
      const res = await fetch(url, getHashOptions);
      const { address, hash } = await res.json();

      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      return await new Promise(function (resolve, reject) {
        ws.onopen = () => {
          fetch(`${node}/transactions`, options)
          .catch(() => {
            ws.close();
            const errorResponse = { error: 'Failed to announce transaction' };
            resolve(errorResponse);
          });
        };

        ws.onclose = () => {};
        ws.onmessage = (message: any) => {
          const res = JSON.parse(message.data);
          const statusFlag: string = `status/${address}`;
          const confirmedFlag: string = `confirmedAdded/${address}`;
          if ('uid' in res) {
            const body1: { [key: string]: string } = { uid: res.uid, subscribe: statusFlag };
            const body2: { [key: string]: string } = { uid: res.uid, subscribe: confirmedFlag };
            ws.send(JSON.stringify(body1));
            ws.send(JSON.stringify(body2));
          } else {
            if (res.topic === statusFlag) {
              if (res.data.hash === hash) {
                ws.close();
                const errorResponse = { error: res.data.code };
                resolve(errorResponse);
              }
            } else if (res.topic === confirmedFlag) {
              if (res.data.meta.hash === hash) {
                ws.close();
                const successResponse = { payload, hash };
                resolve(successResponse);
              }
            }
          }
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.announceTransaction.name} error}`);
      }
    }
  }

  static async getTreasure(node: string, backendUrl: string, hash: string): Promise<TreasureData> {
    try {
      const data = {
        hash,
        node
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const url = new URL(`${backendUrl}/api/gacha/lottery`);
      const res = await fetch(url, options);
      return (await res.json()).result;
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.getTreasure.name} error}`);
      }
    }
  }
}
