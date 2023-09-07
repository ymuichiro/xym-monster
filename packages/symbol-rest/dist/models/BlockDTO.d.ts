import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface BlockDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    height: string;
    timestamp: string;
    difficulty: string;
    proofGamma: string;
    proofVerificationHash: string;
    proofScalar: string;
    previousBlockHash: string;
    transactionsHash: string;
    receiptsHash: string;
    stateHash: string;
    beneficiaryAddress: string;
    feeMultiplier: number;
}
export declare function instanceOfBlockDTO(value: object): boolean;
export declare function BlockDTOFromJSON(json: any): BlockDTO;
export declare function BlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDTO;
export declare function BlockDTOToJSON(value?: BlockDTO | null): any;
