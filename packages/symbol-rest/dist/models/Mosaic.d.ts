export interface Mosaic {
    id: string;
    amount: string;
}
export declare function instanceOfMosaic(value: object): boolean;
export declare function MosaicFromJSON(json: any): Mosaic;
export declare function MosaicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mosaic;
export declare function MosaicToJSON(value?: Mosaic | null): any;
