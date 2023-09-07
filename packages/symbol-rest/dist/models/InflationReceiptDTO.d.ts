import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface InflationReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
    mosaicId: string;
    amount: string;
}
export declare function instanceOfInflationReceiptDTO(value: object): boolean;
export declare function InflationReceiptDTOFromJSON(json: any): InflationReceiptDTO;
export declare function InflationReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): InflationReceiptDTO;
export declare function InflationReceiptDTOToJSON(value?: InflationReceiptDTO | null): any;
