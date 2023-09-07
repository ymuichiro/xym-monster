export interface AccountNamesDTO {
    address: string;
    names: Array<string>;
}
export declare function instanceOfAccountNamesDTO(value: object): boolean;
export declare function AccountNamesDTOFromJSON(json: any): AccountNamesDTO;
export declare function AccountNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountNamesDTO;
export declare function AccountNamesDTOToJSON(value?: AccountNamesDTO | null): any;
