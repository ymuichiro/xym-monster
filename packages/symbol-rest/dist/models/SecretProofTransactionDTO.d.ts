import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface SecretProofTransactionDTO {
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
    hashAlgorithm: LockHashAlgorithmEnum;
    proof: string;
}
export declare function instanceOfSecretProofTransactionDTO(value: object): boolean;
export declare function SecretProofTransactionDTOFromJSON(json: any): SecretProofTransactionDTO;
export declare function SecretProofTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretProofTransactionDTO;
export declare function SecretProofTransactionDTOToJSON(value?: SecretProofTransactionDTO | null): any;
