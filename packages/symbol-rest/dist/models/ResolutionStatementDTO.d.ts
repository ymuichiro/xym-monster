import type { ResolutionEntryDTO } from './ResolutionEntryDTO';
import type { ResolutionStatementDTOUnresolved } from './ResolutionStatementDTOUnresolved';
export interface ResolutionStatementDTO {
    height: string;
    unresolved: ResolutionStatementDTOUnresolved;
    resolutionEntries: Array<ResolutionEntryDTO>;
}
export declare function instanceOfResolutionStatementDTO(value: object): boolean;
export declare function ResolutionStatementDTOFromJSON(json: any): ResolutionStatementDTO;
export declare function ResolutionStatementDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionStatementDTO;
export declare function ResolutionStatementDTOToJSON(value?: ResolutionStatementDTO | null): any;
