import type { StatementMetaDTO } from './StatementMetaDTO';
import type { TransactionStatementDTO } from './TransactionStatementDTO';
export interface TransactionStatementInfoDTO {
    id: string;
    meta: StatementMetaDTO;
    statement: TransactionStatementDTO;
}
export declare function instanceOfTransactionStatementInfoDTO(value: object): boolean;
export declare function TransactionStatementInfoDTOFromJSON(json: any): TransactionStatementInfoDTO;
export declare function TransactionStatementInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementInfoDTO;
export declare function TransactionStatementInfoDTOToJSON(value?: TransactionStatementInfoDTO | null): any;
