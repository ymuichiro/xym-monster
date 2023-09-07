export interface CosignatureDTOAllOf {
    version: string;
    signerPublicKey: string;
}
export declare function instanceOfCosignatureDTOAllOf(value: object): boolean;
export declare function CosignatureDTOAllOfFromJSON(json: any): CosignatureDTOAllOf;
export declare function CosignatureDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosignatureDTOAllOf;
export declare function CosignatureDTOAllOfToJSON(value?: CosignatureDTOAllOf | null): any;
