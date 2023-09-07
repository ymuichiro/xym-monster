import { StatementMetaDTOFromJSON, StatementMetaDTOToJSON, } from './StatementMetaDTO';
import { TransactionStatementDTOFromJSON, TransactionStatementDTOToJSON, } from './TransactionStatementDTO';
export function instanceOfTransactionStatementInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "statement" in value;
    return isInstance;
}
export function TransactionStatementInfoDTOFromJSON(json) {
    return TransactionStatementInfoDTOFromJSONTyped(json, false);
}
export function TransactionStatementInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': StatementMetaDTOFromJSON(json['meta']),
        'statement': TransactionStatementDTOFromJSON(json['statement']),
    };
}
export function TransactionStatementInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': StatementMetaDTOToJSON(value.meta),
        'statement': TransactionStatementDTOToJSON(value.statement),
    };
}
