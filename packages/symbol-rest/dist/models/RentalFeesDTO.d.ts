export interface RentalFeesDTO {
    effectiveRootNamespaceRentalFeePerBlock: string;
    effectiveChildNamespaceRentalFee: string;
    effectiveMosaicRentalFee: string;
}
export declare function instanceOfRentalFeesDTO(value: object): boolean;
export declare function RentalFeesDTOFromJSON(json: any): RentalFeesDTO;
export declare function RentalFeesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RentalFeesDTO;
export declare function RentalFeesDTOToJSON(value?: RentalFeesDTO | null): any;
