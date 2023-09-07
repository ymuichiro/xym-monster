import type { UnresolvedMosaic } from './UnresolvedMosaic';
export interface TransferTransactionBodyDTO {
    recipientAddress: string;
    mosaics: Array<UnresolvedMosaic>;
    message?: string;
}
export declare function instanceOfTransferTransactionBodyDTO(value: object): boolean;
export declare function TransferTransactionBodyDTOFromJSON(json: any): TransferTransactionBodyDTO;
export declare function TransferTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTransactionBodyDTO;
export declare function TransferTransactionBodyDTOToJSON(value?: TransferTransactionBodyDTO | null): any;
