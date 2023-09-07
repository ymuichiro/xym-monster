import type { ParentPublicKeySignaturePair } from './ParentPublicKeySignaturePair';
export interface BmTreeSignature {
    root: ParentPublicKeySignaturePair;
    bottom: ParentPublicKeySignaturePair;
}
export declare function instanceOfBmTreeSignature(value: object): boolean;
export declare function BmTreeSignatureFromJSON(json: any): BmTreeSignature;
export declare function BmTreeSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): BmTreeSignature;
export declare function BmTreeSignatureToJSON(value?: BmTreeSignature | null): any;
