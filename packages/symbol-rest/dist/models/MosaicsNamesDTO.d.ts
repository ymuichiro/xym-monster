import type { MosaicNamesDTO } from './MosaicNamesDTO';
export interface MosaicsNamesDTO {
    mosaicNames: Array<MosaicNamesDTO>;
}
export declare function instanceOfMosaicsNamesDTO(value: object): boolean;
export declare function MosaicsNamesDTOFromJSON(json: any): MosaicsNamesDTO;
export declare function MosaicsNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicsNamesDTO;
export declare function MosaicsNamesDTOToJSON(value?: MosaicsNamesDTO | null): any;
