import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
export interface SecretProofTransactionBodyDTO {
    recipientAddress: string;
    secret: string;
    hashAlgorithm: LockHashAlgorithmEnum;
    proof: string;
}
export declare function instanceOfSecretProofTransactionBodyDTO(value: object): boolean;
export declare function SecretProofTransactionBodyDTOFromJSON(json: any): SecretProofTransactionBodyDTO;
export declare function SecretProofTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretProofTransactionBodyDTO;
export declare function SecretProofTransactionBodyDTOToJSON(value?: SecretProofTransactionBodyDTO | null): any;
