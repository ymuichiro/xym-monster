import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface TransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
}
export declare function instanceOfTransactionDTO(value: object): boolean;
export declare function TransactionDTOFromJSON(json: any): TransactionDTO;
export declare function TransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDTO;
export declare function TransactionDTOToJSON(value?: TransactionDTO | null): any;
