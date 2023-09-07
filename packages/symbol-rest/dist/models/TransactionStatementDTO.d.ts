import type { SourceDTO } from './SourceDTO';
import type { TransactionStatementDTOReceiptsInner } from './TransactionStatementDTOReceiptsInner';
export interface TransactionStatementDTO {
    height: string;
    source: SourceDTO;
    receipts: Array<TransactionStatementDTOReceiptsInner>;
}
export declare function instanceOfTransactionStatementDTO(value: object): boolean;
export declare function TransactionStatementDTOFromJSON(json: any): TransactionStatementDTO;
export declare function TransactionStatementDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementDTO;
export declare function TransactionStatementDTOToJSON(value?: TransactionStatementDTO | null): any;
