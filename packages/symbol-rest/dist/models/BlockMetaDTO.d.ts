export interface BlockMetaDTO {
    hash: string;
    totalFee: string;
    generationHash: string;
    stateHashSubCacheMerkleRoots: Array<string>;
    totalTransactionsCount: number;
    transactionsCount: number;
    statementsCount: number;
}
export declare function instanceOfBlockMetaDTO(value: object): boolean;
export declare function BlockMetaDTOFromJSON(json: any): BlockMetaDTO;
export declare function BlockMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockMetaDTO;
export declare function BlockMetaDTOToJSON(value?: BlockMetaDTO | null): any;
