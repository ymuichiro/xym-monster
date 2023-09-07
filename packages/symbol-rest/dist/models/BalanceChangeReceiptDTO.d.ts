import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface BalanceChangeReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
    mosaicId: string;
    amount: string;
    targetAddress: string;
}
export declare function instanceOfBalanceChangeReceiptDTO(value: object): boolean;
export declare function BalanceChangeReceiptDTOFromJSON(json: any): BalanceChangeReceiptDTO;
export declare function BalanceChangeReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceChangeReceiptDTO;
export declare function BalanceChangeReceiptDTOToJSON(value?: BalanceChangeReceiptDTO | null): any;
