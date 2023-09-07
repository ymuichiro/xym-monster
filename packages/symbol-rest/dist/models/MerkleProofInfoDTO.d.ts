import type { MerklePathItemDTO } from './MerklePathItemDTO';
export interface MerkleProofInfoDTO {
    merklePath?: Array<MerklePathItemDTO>;
}
export declare function instanceOfMerkleProofInfoDTO(value: object): boolean;
export declare function MerkleProofInfoDTOFromJSON(json: any): MerkleProofInfoDTO;
export declare function MerkleProofInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleProofInfoDTO;
export declare function MerkleProofInfoDTOToJSON(value?: MerkleProofInfoDTO | null): any;
