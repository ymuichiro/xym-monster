import * as runtime from '../runtime';
import type { ChainInfoDTO } from '../models';
export declare class ChainRoutesApi extends runtime.BaseAPI {
    getChainInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChainInfoDTO>>;
    getChainInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChainInfoDTO>;
}
