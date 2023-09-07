import type { NetworkTypeEnum } from './NetworkTypeEnum';
import type { UnresolvedMosaic } from './UnresolvedMosaic';
export interface EmbeddedTransferTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    recipientAddress: string;
    mosaics: Array<UnresolvedMosaic>;
    message?: string;
}
export declare function instanceOfEmbeddedTransferTransactionDTO(value: object): boolean;
export declare function EmbeddedTransferTransactionDTOFromJSON(json: any): EmbeddedTransferTransactionDTO;
export declare function EmbeddedTransferTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransferTransactionDTO;
export declare function EmbeddedTransferTransactionDTOToJSON(value?: EmbeddedTransferTransactionDTO | null): any;
