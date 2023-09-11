import { Configuration, BlockInfoDTO, BlockRoutesApi } from 'symbol-rest';
import TransactionService from './TransactionService';

export default class BlockService {
  static async getBlockInfoByHeight(node: string, height: string): Promise<BlockInfoDTO> {
    const config = new Configuration({
      basePath: node,
    });
    const blockRoutesApi = new BlockRoutesApi(config);
    return await blockRoutesApi.getBlockByHeight({ height });
  }

  static async getBlockInfoByHash(node: string, hash: string): Promise<BlockInfoDTO> {
    const tx = await TransactionService.getConfirmedTransaction(node, hash);
    return await this.getBlockInfoByHeight(node, tx.meta.height);
  }
}
