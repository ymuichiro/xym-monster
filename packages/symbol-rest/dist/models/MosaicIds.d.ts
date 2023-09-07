export interface MosaicIds {
    mosaicIds?: Array<string>;
}
export declare function instanceOfMosaicIds(value: object): boolean;
export declare function MosaicIdsFromJSON(json: any): MosaicIds;
export declare function MosaicIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicIds;
export declare function MosaicIdsToJSON(value?: MosaicIds | null): any;
