import * as runtime from '../runtime';
import type { NodeHealthInfoDTO, NodeInfoDTO, NodeTimeDTO, ServerInfoDTO, StorageInfoDTO, UnlockedAccountDTO } from '../models';
export declare class NodeRoutesApi extends runtime.BaseAPI {
    getNodeHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NodeHealthInfoDTO>>;
    getNodeHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NodeHealthInfoDTO>;
    getNodeInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NodeInfoDTO>>;
    getNodeInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NodeInfoDTO>;
    getNodePeersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NodeInfoDTO>>>;
    getNodePeers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NodeInfoDTO>>;
    getNodeStorageRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageInfoDTO>>;
    getNodeStorage(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageInfoDTO>;
    getNodeTimeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NodeTimeDTO>>;
    getNodeTime(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NodeTimeDTO>;
    getServerInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerInfoDTO>>;
    getServerInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerInfoDTO>;
    getUnlockedAccountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnlockedAccountDTO>>;
    getUnlockedAccount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnlockedAccountDTO>;
}
