export interface MerkleTreeBranchLinkDTO {
    bit: string;
    link: string;
}
export declare function instanceOfMerkleTreeBranchLinkDTO(value: object): boolean;
export declare function MerkleTreeBranchLinkDTOFromJSON(json: any): MerkleTreeBranchLinkDTO;
export declare function MerkleTreeBranchLinkDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleTreeBranchLinkDTO;
export declare function MerkleTreeBranchLinkDTOToJSON(value?: MerkleTreeBranchLinkDTO | null): any;
