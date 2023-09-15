import { Configuration, ChainInfoDTO, ChainRoutesApi } from 'symbol-rest';

export default class ChainService {
  static async getChainInfo(node: string): Promise<ChainInfoDTO> {
    const config = new Configuration({
      basePath: node,
    });
    const chainRoutesApi = new ChainRoutesApi(config);
    return await chainRoutesApi.getChainInfo();
  }
}
