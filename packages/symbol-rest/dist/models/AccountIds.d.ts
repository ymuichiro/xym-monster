export interface AccountIds {
    publicKeys?: Array<string>;
    addresses?: Array<string>;
}
export declare function instanceOfAccountIds(value: object): boolean;
export declare function AccountIdsFromJSON(json: any): AccountIds;
export declare function AccountIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountIds;
export declare function AccountIdsToJSON(value?: AccountIds | null): any;
