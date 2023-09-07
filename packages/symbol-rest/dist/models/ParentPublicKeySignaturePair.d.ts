export interface ParentPublicKeySignaturePair {
    parentPublicKey: string;
    signature: string;
}
export declare function instanceOfParentPublicKeySignaturePair(value: object): boolean;
export declare function ParentPublicKeySignaturePairFromJSON(json: any): ParentPublicKeySignaturePair;
export declare function ParentPublicKeySignaturePairFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParentPublicKeySignaturePair;
export declare function ParentPublicKeySignaturePairToJSON(value?: ParentPublicKeySignaturePair | null): any;
