import { Configuration, NodeInfoDTO, NodeRoutesApi } from 'symbol-rest';

export default class NodeService {
  static async getNodeInfo(node: string): Promise<NodeInfoDTO> {
    const config = new Configuration({
      basePath: node,
    });
    const nodeRoutesApi = new NodeRoutesApi(config);
    const nodeInfo = await nodeRoutesApi.getNodeInfo();
    return nodeInfo;
  }
}
