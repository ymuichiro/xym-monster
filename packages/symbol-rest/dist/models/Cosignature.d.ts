export interface Cosignature {
    parentHash?: string;
    signature?: string;
    signerPublicKey?: string;
    version?: string;
}
export declare function instanceOfCosignature(value: object): boolean;
export declare function CosignatureFromJSON(json: any): Cosignature;
export declare function CosignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cosignature;
export declare function CosignatureToJSON(value?: Cosignature | null): any;
