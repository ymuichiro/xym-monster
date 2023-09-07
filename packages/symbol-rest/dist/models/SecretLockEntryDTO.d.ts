import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import type { LockStatus } from './LockStatus';
export interface SecretLockEntryDTO {
    version: number;
    ownerAddress: string;
    mosaicId: string;
    amount: string;
    endHeight: string;
    status: LockStatus;
    hashAlgorithm: LockHashAlgorithmEnum;
    secret: string;
    recipientAddress: string;
    compositeHash: string;
}
export declare function instanceOfSecretLockEntryDTO(value: object): boolean;
export declare function SecretLockEntryDTOFromJSON(json: any): SecretLockEntryDTO;
export declare function SecretLockEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockEntryDTO;
export declare function SecretLockEntryDTOToJSON(value?: SecretLockEntryDTO | null): any;
