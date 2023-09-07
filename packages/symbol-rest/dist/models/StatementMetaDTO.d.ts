export interface StatementMetaDTO {
    timestamp: string;
}
export declare function instanceOfStatementMetaDTO(value: object): boolean;
export declare function StatementMetaDTOFromJSON(json: any): StatementMetaDTO;
export declare function StatementMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatementMetaDTO;
export declare function StatementMetaDTOToJSON(value?: StatementMetaDTO | null): any;
