import type { MerkleTreeBranchLinkDTO } from './MerkleTreeBranchLinkDTO';
import type { MerkleTreeNodeTypeEnum } from './MerkleTreeNodeTypeEnum';
export interface MerkleTreeBranchDTO {
    type: MerkleTreeNodeTypeEnum;
    path: string;
    encodedPath: string;
    nibbleCount: number;
    linkMask: string;
    links: Array<MerkleTreeBranchLinkDTO>;
    branchHash: string;
}
export declare function instanceOfMerkleTreeBranchDTO(value: object): boolean;
export declare function MerkleTreeBranchDTOFromJSON(json: any): MerkleTreeBranchDTO;
export declare function MerkleTreeBranchDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleTreeBranchDTO;
export declare function MerkleTreeBranchDTOToJSON(value?: MerkleTreeBranchDTO | null): any;
