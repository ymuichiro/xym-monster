import type { PositionEnum } from './PositionEnum';
export interface MerklePathItemDTO {
    position?: PositionEnum;
    hash?: string;
}
export declare function instanceOfMerklePathItemDTO(value: object): boolean;
export declare function MerklePathItemDTOFromJSON(json: any): MerklePathItemDTO;
export declare function MerklePathItemDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerklePathItemDTO;
export declare function MerklePathItemDTOToJSON(value?: MerklePathItemDTO | null): any;
