import type { SecretLockEntryDTO } from './SecretLockEntryDTO';
export interface SecretLockInfoDTO {
    id: string;
    lock: SecretLockEntryDTO;
}
export declare function instanceOfSecretLockInfoDTO(value: object): boolean;
export declare function SecretLockInfoDTOFromJSON(json: any): SecretLockInfoDTO;
export declare function SecretLockInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockInfoDTO;
export declare function SecretLockInfoDTOToJSON(value?: SecretLockInfoDTO | null): any;
