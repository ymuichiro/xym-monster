export interface SourceDTO {
    primaryId: number;
    secondaryId: number;
}
export declare function instanceOfSourceDTO(value: object): boolean;
export declare function SourceDTOFromJSON(json: any): SourceDTO;
export declare function SourceDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceDTO;
export declare function SourceDTOToJSON(value?: SourceDTO | null): any;
