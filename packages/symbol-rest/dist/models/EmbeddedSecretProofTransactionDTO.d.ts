import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedSecretProofTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    recipientAddress: string;
    secret: string;
    hashAlgorithm: LockHashAlgorithmEnum;
    proof: string;
}
export declare function instanceOfEmbeddedSecretProofTransactionDTO(value: object): boolean;
export declare function EmbeddedSecretProofTransactionDTOFromJSON(json: any): EmbeddedSecretProofTransactionDTO;
export declare function EmbeddedSecretProofTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedSecretProofTransactionDTO;
export declare function EmbeddedSecretProofTransactionDTOToJSON(value?: EmbeddedSecretProofTransactionDTO | null): any;
