import type { TransactionInfoDTOMeta } from './TransactionInfoDTOMeta';
import type { TransactionInfoDTOTransaction } from './TransactionInfoDTOTransaction';
export interface TransactionInfoDTO {
    id: string;
    meta: TransactionInfoDTOMeta;
    transaction: TransactionInfoDTOTransaction;
}
export declare function instanceOfTransactionInfoDTO(value: object): boolean;
export declare function TransactionInfoDTOFromJSON(json: any): TransactionInfoDTO;
export declare function TransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTO;
export declare function TransactionInfoDTOToJSON(value?: TransactionInfoDTO | null): any;
