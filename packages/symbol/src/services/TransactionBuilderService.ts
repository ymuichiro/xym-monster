import { getDataFromApi, buildQueryString } from '../utils/utils';
import TransferTransaction from '../models/TransferTransaction';
import OneTouchHarvestingTransaction from '../models/OneTouchHarvestingTransaction';
import MosaicTransaction from '../models/MosaicTransaction';

export default class TransactionBuilderService {
  static async buildTransferTransaction(transferTransaction: TransferTransaction): Promise<string> {
      try{
          const queryString = buildQueryString(transferTransaction);
          const url = new URL(`${transferTransaction.backendUrl}/api/transactions/transfer?${queryString}`);
          console.log(url.toString());
          const result = await getDataFromApi(url.toString());
          return result.payload;
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
