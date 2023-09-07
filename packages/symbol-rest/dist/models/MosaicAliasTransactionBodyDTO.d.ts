import type { AliasActionEnum } from './AliasActionEnum';
export interface MosaicAliasTransactionBodyDTO {
    namespaceId: string;
    mosaicId: string;
    aliasAction: AliasActionEnum;
}
export declare function instanceOfMosaicAliasTransactionBodyDTO(value: object): boolean;
export declare function MosaicAliasTransactionBodyDTOFromJSON(json: any): MosaicAliasTransactionBodyDTO;
export declare function MosaicAliasTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAliasTransactionBodyDTO;
export declare function MosaicAliasTransactionBodyDTOToJSON(value?: MosaicAliasTransactionBodyDTO | null): any;
