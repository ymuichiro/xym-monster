export interface VerifiableEntityDTO {
    signature: string;
}
export declare function instanceOfVerifiableEntityDTO(value: object): boolean;
export declare function VerifiableEntityDTOFromJSON(json: any): VerifiableEntityDTO;
export declare function VerifiableEntityDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifiableEntityDTO;
export declare function VerifiableEntityDTOToJSON(value?: VerifiableEntityDTO | null): any;
