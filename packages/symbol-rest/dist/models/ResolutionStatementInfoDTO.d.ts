import type { ResolutionStatementDTO } from './ResolutionStatementDTO';
import type { StatementMetaDTO } from './StatementMetaDTO';
export interface ResolutionStatementInfoDTO {
    id: string;
    meta: StatementMetaDTO;
    statement: ResolutionStatementDTO;
}
export declare function instanceOfResolutionStatementInfoDTO(value: object): boolean;
export declare function ResolutionStatementInfoDTOFromJSON(json: any): ResolutionStatementInfoDTO;
export declare function ResolutionStatementInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementInfoDTO;
export declare function ResolutionStatementInfoDTOToJSON(value?: ResolutionStatementInfoDTO | null): any;
