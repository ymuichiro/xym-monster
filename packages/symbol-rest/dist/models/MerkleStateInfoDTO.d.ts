import type { MerkleStateInfoDTOTreeInner } from './MerkleStateInfoDTOTreeInner';
export interface MerkleStateInfoDTO {
    raw: string;
    tree: Array<MerkleStateInfoDTOTreeInner>;
}
export declare function instanceOfMerkleStateInfoDTO(value: object): boolean;
export declare function MerkleStateInfoDTOFromJSON(json: any): MerkleStateInfoDTO;
export declare function MerkleStateInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleStateInfoDTO;
export declare function MerkleStateInfoDTOToJSON(value?: MerkleStateInfoDTO | null): any;
