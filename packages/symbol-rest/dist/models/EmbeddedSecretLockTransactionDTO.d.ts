import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedSecretLockTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    recipientAddress: string;
    secret: string;
    mosaicId: string;
    amount: string;
    duration: string;
    hashAlgorithm: LockHashAlgorithmEnum;
}
export declare function instanceOfEmbeddedSecretLockTransactionDTO(value: object): boolean;
export declare function EmbeddedSecretLockTransactionDTOFromJSON(json: any): EmbeddedSecretLockTransactionDTO;
export declare function EmbeddedSecretLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedSecretLockTransactionDTO;
export declare function EmbeddedSecretLockTransactionDTOToJSON(value?: EmbeddedSecretLockTransactionDTO | null): any;
