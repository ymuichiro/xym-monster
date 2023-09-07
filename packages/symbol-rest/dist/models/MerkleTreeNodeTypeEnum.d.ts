export declare const MerkleTreeNodeTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_255: 255;
};
export type MerkleTreeNodeTypeEnum = typeof MerkleTreeNodeTypeEnum[keyof typeof MerkleTreeNodeTypeEnum];
export declare function MerkleTreeNodeTypeEnumFromJSON(json: any): MerkleTreeNodeTypeEnum;
export declare function MerkleTreeNodeTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleTreeNodeTypeEnum;
export declare function MerkleTreeNodeTypeEnumToJSON(value?: MerkleTreeNodeTypeEnum | null): any;
