export interface SizePrefixedEntityDTO {
    size: number;
}
export declare function instanceOfSizePrefixedEntityDTO(value: object): boolean;
export declare function SizePrefixedEntityDTOFromJSON(json: any): SizePrefixedEntityDTO;
export declare function SizePrefixedEntityDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SizePrefixedEntityDTO;
export declare function SizePrefixedEntityDTOToJSON(value?: SizePrefixedEntityDTO | null): any;
