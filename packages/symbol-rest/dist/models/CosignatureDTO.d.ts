export interface CosignatureDTO {
    signature: string;
    version: string;
    signerPublicKey: string;
}
export declare function instanceOfCosignatureDTO(value: object): boolean;
export declare function CosignatureDTOFromJSON(json: any): CosignatureDTO;
export declare function CosignatureDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosignatureDTO;
export declare function CosignatureDTOToJSON(value?: CosignatureDTO | null): any;
