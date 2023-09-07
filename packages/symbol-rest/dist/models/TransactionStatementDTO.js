import { SourceDTOFromJSON, SourceDTOToJSON, } from './SourceDTO';
import { TransactionStatementDTOReceiptsInnerFromJSON, TransactionStatementDTOReceiptsInnerToJSON, } from './TransactionStatementDTOReceiptsInner';
export function instanceOfTransactionStatementDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "receipts" in value;
    return isInstance;
}
export function TransactionStatementDTOFromJSON(json) {
    return TransactionStatementDTOFromJSONTyped(json, false);
}
export function TransactionStatementDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'source': SourceDTOFromJSON(json['source']),
        'receipts': (json['receipts'].map(TransactionStatementDTOReceiptsInnerFromJSON)),
    };
}
export function TransactionStatementDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'source': SourceDTOToJSON(value.source),
        'receipts': (value.receipts.map(TransactionStatementDTOReceiptsInnerToJSON)),
    };
}
