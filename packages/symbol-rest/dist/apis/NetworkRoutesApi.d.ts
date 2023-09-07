import * as runtime from '../runtime';
import type { NetworkConfigurationDTO, NetworkTypeDTO, RentalFeesDTO, TransactionFeesDTO } from '../models';
export declare class NetworkRoutesApi extends runtime.BaseAPI {
    getNetworkPropertiesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkConfigurationDTO>>;
    getNetworkProperties(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkConfigurationDTO>;
    getNetworkTypeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkTypeDTO>>;
    getNetworkType(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkTypeDTO>;
    getRentalFeesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RentalFeesDTO>>;
    getRentalFees(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RentalFeesDTO>;
    getTransactionFeesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionFeesDTO>>;
    getTransactionFees(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionFeesDTO>;
}
