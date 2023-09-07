export interface MosaicNamesDTO {
    mosaicId: string;
    names: Array<string>;
}
export declare function instanceOfMosaicNamesDTO(value: object): boolean;
export declare function MosaicNamesDTOFromJSON(json: any): MosaicNamesDTO;
export declare function MosaicNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicNamesDTO;
export declare function MosaicNamesDTOToJSON(value?: MosaicNamesDTO | null): any;
