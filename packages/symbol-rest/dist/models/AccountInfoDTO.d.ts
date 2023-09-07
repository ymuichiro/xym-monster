import type { AccountDTO } from './AccountDTO';
export interface AccountInfoDTO {
    id: string;
    account: AccountDTO;
}
export declare function instanceOfAccountInfoDTO(value: object): boolean;
export declare function AccountInfoDTOFromJSON(json: any): AccountInfoDTO;
export declare function AccountInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoDTO;
export declare function AccountInfoDTOToJSON(value?: AccountInfoDTO | null): any;
