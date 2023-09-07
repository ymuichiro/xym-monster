export interface UnlockedAccountDTO {
    unlockedAccount: Array<string>;
}
export declare function instanceOfUnlockedAccountDTO(value: object): boolean;
export declare function UnlockedAccountDTOFromJSON(json: any): UnlockedAccountDTO;
export declare function UnlockedAccountDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnlockedAccountDTO;
export declare function UnlockedAccountDTOToJSON(value?: UnlockedAccountDTO | null): any;
