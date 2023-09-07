import type { NetworkTypeEnum } from './NetworkTypeEnum';
import type { UnresolvedMosaic } from './UnresolvedMosaic';
export interface TransferTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    recipientAddress: string;
    mosaics: Array<UnresolvedMosaic>;
    message?: string;
}
export declare function instanceOfTransferTransactionDTO(value: object): boolean;
export declare function TransferTransactionDTOFromJSON(json: any): TransferTransactionDTO;
export declare function TransferTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTransactionDTO;
export declare function TransferTransactionDTOToJSON(value?: TransferTransactionDTO | null): any;
