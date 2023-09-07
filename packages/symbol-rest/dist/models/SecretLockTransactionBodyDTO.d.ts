import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
export interface SecretLockTransactionBodyDTO {
    recipientAddress: string;
    secret: string;
    mosaicId: string;
    amount: string;
    duration: string;
    hashAlgorithm: LockHashAlgorithmEnum;
}
export declare function instanceOfSecretLockTransactionBodyDTO(value: object): boolean;
export declare function SecretLockTransactionBodyDTOFromJSON(json: any): SecretLockTransactionBodyDTO;
export declare function SecretLockTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockTransactionBodyDTO;
export declare function SecretLockTransactionBodyDTOToJSON(value?: SecretLockTransactionBodyDTO | null): any;
