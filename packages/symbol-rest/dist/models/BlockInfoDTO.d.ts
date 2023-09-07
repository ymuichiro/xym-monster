import type { BlockInfoDTOBlock } from './BlockInfoDTOBlock';
import type { BlockMetaDTO } from './BlockMetaDTO';
export interface BlockInfoDTO {
    id: string;
    meta: BlockMetaDTO;
    block: BlockInfoDTOBlock;
}
export declare function instanceOfBlockInfoDTO(value: object): boolean;
export declare function BlockInfoDTOFromJSON(json: any): BlockInfoDTO;
export declare function BlockInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInfoDTO;
export declare function BlockInfoDTOToJSON(value?: BlockInfoDTO | null): any;
