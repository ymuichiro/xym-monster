import type { MosaicSupplyChangeActionEnum } from './MosaicSupplyChangeActionEnum';
export interface MosaicSupplyChangeTransactionBodyDTO {
    mosaicId: string;
    delta: string;
    action: MosaicSupplyChangeActionEnum;
}
export declare function instanceOfMosaicSupplyChangeTransactionBodyDTO(value: object): boolean;
export declare function MosaicSupplyChangeTransactionBodyDTOFromJSON(json: any): MosaicSupplyChangeTransactionBodyDTO;
export declare function MosaicSupplyChangeTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeTransactionBodyDTO;
export declare function MosaicSupplyChangeTransactionBodyDTOToJSON(value?: MosaicSupplyChangeTransactionBodyDTO | null): any;
