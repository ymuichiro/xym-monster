import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface TransactionStatementDTOReceiptsInner {
    version: number;
    type: ReceiptTypeEnum;
    mosaicId: string;
    amount: string;
    senderAddress: string;
    recipientAddress: string;
    targetAddress: string;
    artifactId: string;
}
export declare function instanceOfTransactionStatementDTOReceiptsInner(value: object): boolean;
export declare function TransactionStatementDTOReceiptsInnerFromJSON(json: any): TransactionStatementDTOReceiptsInner;
export declare function TransactionStatementDTOReceiptsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatementDTOReceiptsInner;
export declare function TransactionStatementDTOReceiptsInnerToJSON(value?: TransactionStatementDTOReceiptsInner | null): any;
