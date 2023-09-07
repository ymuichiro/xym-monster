import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface ReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
}
export declare function instanceOfReceiptDTO(value: object): boolean;
export declare function ReceiptDTOFromJSON(json: any): ReceiptDTO;
export declare function ReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiptDTO;
export declare function ReceiptDTOToJSON(value?: ReceiptDTO | null): any;
