import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
export interface NamespaceExpiryReceiptDTO {
    version: number;
    type: ReceiptTypeEnum;
    artifactId: string;
}
export declare function instanceOfNamespaceExpiryReceiptDTO(value: object): boolean;
export declare function NamespaceExpiryReceiptDTOFromJSON(json: any): NamespaceExpiryReceiptDTO;
export declare function NamespaceExpiryReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceExpiryReceiptDTO;
export declare function NamespaceExpiryReceiptDTOToJSON(value?: NamespaceExpiryReceiptDTO | null): any;
