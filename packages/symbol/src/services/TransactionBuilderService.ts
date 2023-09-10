import { getDataFromApi, buildQueryString } from '../utils/utils';
import TransferTransaction from '../models/TransferTransaction';
import OneTouchHarvestingTransaction from '../models/OneTouchHarvestingTransaction';
import MosaicTransaction from '../models/MosaicTransaction';

export default class TransactionBuilderService {
  static async buildTransferTransaction(transferTransaction: TransferTransaction): Promise<string> {
    try{
      return await new Promise(function (resolve, reject) {
        (BigInt.prototype as any).toJSON = function() { return this.toString(); }
        const url = new URL(`${transferTransaction.backendUrl}/api/transactions/transfer`);
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transferTransaction),
        }).then(async (res) => {
          if (res.status !== 200) {
            reject(new Error('failed to fetch'));
          }
          resolve((await res.json()).payload);
        }).catch((err) => {
          reject(err);
        });
      });
    } catch(e: any) {
        throw new Error(e.message);
    }
  }

  static async buildMosaicTransaction(mosaicTransaction: MosaicTransaction): Promise<string> {
    try{
        const queryString = buildQueryString(mosaicTransaction);
        const url = new URL(`${mosaicTransaction.backendUrl}/api/transactions/mosaic?${queryString}`);
        const result = await getDataFromApi(url.toString());
        return result.payload;
    } catch(e: any) {
        throw new Error(e.message);
    }
  }

  static async buildOneTouchHarvestingTransaction(oneTouchHarvestingTransaction: OneTouchHarvestingTransaction): Promise<string> {
    try{
      const queryString = buildQueryString(oneTouchHarvestingTransaction);
      const url = new URL(`${oneTouchHarvestingTransaction.backendUrl}/api/transactions/harvest?${queryString}`);
      const result = await getDataFromApi(url.toString());
      return result.payload;
    } catch(e: any) {
        throw new Error(e.message);
    }
  }
}
