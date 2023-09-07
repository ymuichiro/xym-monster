import type { FinalizedBlockDTO } from './FinalizedBlockDTO';
export interface ChainInfoDTO {
    height: string;
    scoreHigh: string;
    scoreLow: string;
    latestFinalizedBlock: FinalizedBlockDTO;
}
export declare function instanceOfChainInfoDTO(value: object): boolean;
export declare function ChainInfoDTOFromJSON(json: any): ChainInfoDTO;
export declare function ChainInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainInfoDTO;
export declare function ChainInfoDTOToJSON(value?: ChainInfoDTO | null): any;
