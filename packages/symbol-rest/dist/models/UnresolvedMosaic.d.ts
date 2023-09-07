export interface UnresolvedMosaic {
    id: string;
    amount: string;
}
export declare function instanceOfUnresolvedMosaic(value: object): boolean;
export declare function UnresolvedMosaicFromJSON(json: any): UnresolvedMosaic;
export declare function UnresolvedMosaicFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnresolvedMosaic;
export declare function UnresolvedMosaicToJSON(value?: UnresolvedMosaic | null): any;
