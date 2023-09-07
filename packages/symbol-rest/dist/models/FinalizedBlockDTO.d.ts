export interface FinalizedBlockDTO {
    finalizationEpoch: number;
    finalizationPoint: number;
    height: string;
    hash: string;
}
export declare function instanceOfFinalizedBlockDTO(value: object): boolean;
export declare function FinalizedBlockDTOFromJSON(json: any): FinalizedBlockDTO;
export declare function FinalizedBlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalizedBlockDTO;
export declare function FinalizedBlockDTOToJSON(value?: FinalizedBlockDTO | null): any;
