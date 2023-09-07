import type { MerkleTreeNodeTypeEnum } from './MerkleTreeNodeTypeEnum';
export interface MerkleTreeLeafDTO {
    type: MerkleTreeNodeTypeEnum;
    path: string;
    encodedPath: string;
    nibbleCount: number;
    value: string;
    leafHash: string;
}
export declare function instanceOfMerkleTreeLeafDTO(value: object): boolean;
export declare function MerkleTreeLeafDTOFromJSON(json: any): MerkleTreeLeafDTO;
export declare function MerkleTreeLeafDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleTreeLeafDTO;
export declare function MerkleTreeLeafDTOToJSON(value?: MerkleTreeLeafDTO | null): any;
