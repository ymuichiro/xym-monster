import {
  AnnounceCosignatureTransactionRequest,
  AnnouncePartialTransactionRequest,
  Configuration,
  SearchConfirmedTransactionsRequest,
  TransactionRoutesApi,
} from 'symbol-rest';

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

  static async announceTransaction(node: string, backendUrl: string, payload: string) {
    try {
      const url = new URL(`${backendUrl}/api/transactions/announce?node=${node}&payload=${payload}`);
      const res = await fetch(url.toString());
      return res.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.announceTransaction.name} error}`);
      }
    }
  }

  static async getTreasure(node: string, backendUrl: string, hash: string) {
    try {
      const url = new URL(`${backendUrl}/api/gacha/lottery?hash=${hash}&node=${node}`);
      const res = await fetch(url.toString());
      return res.json();
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(`${this.name} ${this.getTreasure.name} error}`);
      }
    }
  }
}
