import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface SecretLockTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    recipientAddress: string;
    secret: string;
    mosaicId: string;
    amount: string;
    duration: string;
    hashAlgorithm: LockHashAlgorithmEnum;
}
export declare function instanceOfSecretLockTransactionDTO(value: object): boolean;
export declare function SecretLockTransactionDTOFromJSON(json: any): SecretLockTransactionDTO;
export declare function SecretLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockTransactionDTO;
export declare function SecretLockTransactionDTOToJSON(value?: SecretLockTransactionDTO | null): any;
