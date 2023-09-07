import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface HashLockTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    mosaicId: string;
    amount: string;
    duration: string;
    hash: string;
}
export declare function instanceOfHashLockTransactionDTO(value: object): boolean;
export declare function HashLockTransactionDTOFromJSON(json: any): HashLockTransactionDTO;
export declare function HashLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockTransactionDTO;
export declare function HashLockTransactionDTOToJSON(value?: HashLockTransactionDTO | null): any;
