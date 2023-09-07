import * as runtime from '../runtime';
import type { FinalizationProofDTO } from '../models';
export interface GetFinalizationProofAtEpochRequest {
    epoch: number;
}
export interface GetFinalizationProofAtHeightRequest {
    height: string;
}
export declare class FinalizationRoutesApi extends runtime.BaseAPI {
    getFinalizationProofAtEpochRaw(requestParameters: GetFinalizationProofAtEpochRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinalizationProofDTO>>;
    getFinalizationProofAtEpoch(requestParameters: GetFinalizationProofAtEpochRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinalizationProofDTO>;
    getFinalizationProofAtHeightRaw(requestParameters: GetFinalizationProofAtHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinalizationProofDTO>>;
    getFinalizationProofAtHeight(requestParameters: GetFinalizationProofAtHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinalizationProofDTO>;
}
