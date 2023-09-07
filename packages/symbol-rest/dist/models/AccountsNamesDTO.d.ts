import type { AccountNamesDTO } from './AccountNamesDTO';
export interface AccountsNamesDTO {
    accountNames: Array<AccountNamesDTO>;
}
export declare function instanceOfAccountsNamesDTO(value: object): boolean;
export declare function AccountsNamesDTOFromJSON(json: any): AccountsNamesDTO;
export declare function AccountsNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsNamesDTO;
export declare function AccountsNamesDTOToJSON(value?: AccountsNamesDTO | null): any;
