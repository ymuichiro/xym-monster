import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface BlockInfoDTOBlock {
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
    votingEligibleAccountsCount: number;
    harvestingEligibleAccountsCount: string;
    totalVotingBalance: string;
    previousImportanceBlockHash: string;
}
export declare function instanceOfBlockInfoDTOBlock(value: object): boolean;
export declare function BlockInfoDTOBlockFromJSON(json: any): BlockInfoDTOBlock;
export declare function BlockInfoDTOBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInfoDTOBlock;
export declare function BlockInfoDTOBlockToJSON(value?: BlockInfoDTOBlock | null): any;
