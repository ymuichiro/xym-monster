import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface MosaicExpiryReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
    artifactId: string;
}
export declare function instanceOfMosaicExpiryReceiptDTO(value: object): boolean;
export declare function MosaicExpiryReceiptDTOFromJSON(json: any): MosaicExpiryReceiptDTO;
export declare function MosaicExpiryReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicExpiryReceiptDTO;
export declare function MosaicExpiryReceiptDTOToJSON(value?: MosaicExpiryReceiptDTO | null): any;
