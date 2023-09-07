import { ResolutionStatementDTOFromJSON, ResolutionStatementDTOToJSON, } from './ResolutionStatementDTO';
import { StatementMetaDTOFromJSON, StatementMetaDTOToJSON, } from './StatementMetaDTO';
export function instanceOfResolutionStatementInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "statement" in value;
    return isInstance;
}
export function ResolutionStatementInfoDTOFromJSON(json) {
    return ResolutionStatementInfoDTOFromJSONTyped(json, false);
}
export function ResolutionStatementInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': StatementMetaDTOFromJSON(json['meta']),
        'statement': ResolutionStatementDTOFromJSON(json['statement']),
    };
}
export function ResolutionStatementInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': StatementMetaDTOToJSON(value.meta),
        'statement': ResolutionStatementDTOToJSON(value.statement),
    };
}
