import type { TransactionGroupEnum } from './TransactionGroupEnum';
import type { TransactionStatusEnum } from './TransactionStatusEnum';
export interface TransactionStatusDTO {
    group: TransactionGroupEnum;
    code?: TransactionStatusEnum;
    hash: string;
    deadline: string;
    height?: string;
}
export declare function instanceOfTransactionStatusDTO(value: object): boolean;
export declare function TransactionStatusDTOFromJSON(json: any): TransactionStatusDTO;
export declare function TransactionStatusDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatusDTO;
export declare function TransactionStatusDTOToJSON(value?: TransactionStatusDTO | null): any;
