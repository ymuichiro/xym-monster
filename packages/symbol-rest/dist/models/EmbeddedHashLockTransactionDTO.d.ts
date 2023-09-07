import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedHashLockTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    mosaicId: string;
    amount: string;
    duration: string;
    hash: string;
}
export declare function instanceOfEmbeddedHashLockTransactionDTO(value: object): boolean;
export declare function EmbeddedHashLockTransactionDTOFromJSON(json: any): EmbeddedHashLockTransactionDTO;
export declare function EmbeddedHashLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedHashLockTransactionDTO;
export declare function EmbeddedHashLockTransactionDTOToJSON(value?: EmbeddedHashLockTransactionDTO | null): any;
