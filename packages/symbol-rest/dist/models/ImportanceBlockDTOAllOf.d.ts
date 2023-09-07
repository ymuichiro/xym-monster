export interface ImportanceBlockDTOAllOf {
    votingEligibleAccountsCount: number;
    harvestingEligibleAccountsCount: string;
    totalVotingBalance: string;
    previousImportanceBlockHash: string;
}
export declare function instanceOfImportanceBlockDTOAllOf(value: object): boolean;
export declare function ImportanceBlockDTOAllOfFromJSON(json: any): ImportanceBlockDTOAllOf;
export declare function ImportanceBlockDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTOAllOf;
export declare function ImportanceBlockDTOAllOfToJSON(value?: ImportanceBlockDTOAllOf | null): any;
