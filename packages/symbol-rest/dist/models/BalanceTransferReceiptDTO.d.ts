import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface BalanceTransferReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
    mosaicId: string;
    amount: string;
    senderAddress: string;
    recipientAddress: string;
}
export declare function instanceOfBalanceTransferReceiptDTO(value: object): boolean;
export declare function BalanceTransferReceiptDTOFromJSON(json: any): BalanceTransferReceiptDTO;
export declare function BalanceTransferReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceTransferReceiptDTO;
export declare function BalanceTransferReceiptDTOToJSON(value?: BalanceTransferReceiptDTO | null): any;
