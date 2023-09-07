import type { MerkleTreeBranchLinkDTO } from './MerkleTreeBranchLinkDTO';
import type { MerkleTreeNodeTypeEnum } from './MerkleTreeNodeTypeEnum';
export interface MerkleStateInfoDTOTreeInner {
    type: MerkleTreeNodeTypeEnum;
    path: string;
    encodedPath: string;
    nibbleCount: number;
    linkMask: string;
    links: Array<MerkleTreeBranchLinkDTO>;
    branchHash: string;
    value: string;
    leafHash: string;
}
export declare function instanceOfMerkleStateInfoDTOTreeInner(value: object): boolean;
export declare function MerkleStateInfoDTOTreeInnerFromJSON(json: any): MerkleStateInfoDTOTreeInner;
export declare function MerkleStateInfoDTOTreeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleStateInfoDTOTreeInner;
export declare function MerkleStateInfoDTOTreeInnerToJSON(value?: MerkleStateInfoDTOTreeInner | null): any;
