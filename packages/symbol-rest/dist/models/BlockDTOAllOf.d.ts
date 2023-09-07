export interface BlockDTOAllOf {
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
export declare function instanceOfBlockDTOAllOf(value: object): boolean;
export declare function BlockDTOAllOfFromJSON(json: any): BlockDTOAllOf;
export declare function BlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDTOAllOf;
export declare function BlockDTOAllOfToJSON(value?: BlockDTOAllOf | null): any;
