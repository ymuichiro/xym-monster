import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface ImportanceBlockDTO {
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
export declare function instanceOfImportanceBlockDTO(value: object): boolean;
export declare function ImportanceBlockDTOFromJSON(json: any): ImportanceBlockDTO;
export declare function ImportanceBlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTO;
export declare function ImportanceBlockDTOToJSON(value?: ImportanceBlockDTO | null): any;
