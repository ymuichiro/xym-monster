import type { ResolutionEntryDTOResolved } from './ResolutionEntryDTOResolved';
import type { SourceDTO } from './SourceDTO';
export interface ResolutionEntryDTO {
    source: SourceDTO;
    resolved: ResolutionEntryDTOResolved;
}
export declare function instanceOfResolutionEntryDTO(value: object): boolean;
export declare function ResolutionEntryDTOFromJSON(json: any): ResolutionEntryDTO;
export declare function ResolutionEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolutionEntryDTO;
export declare function ResolutionEntryDTOToJSON(value?: ResolutionEntryDTO | null): any;
