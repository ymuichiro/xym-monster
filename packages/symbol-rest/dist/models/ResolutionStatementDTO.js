import { ResolutionEntryDTOFromJSON, ResolutionEntryDTOToJSON, } from './ResolutionEntryDTO';
import { ResolutionStatementDTOUnresolvedFromJSON, ResolutionStatementDTOUnresolvedToJSON, } from './ResolutionStatementDTOUnresolved';
export function instanceOfResolutionStatementDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "unresolved" in value;
    isInstance = isInstance && "resolutionEntries" in value;
    return isInstance;
}
export function ResolutionStatementDTOFromJSON(json) {
    return ResolutionStatementDTOFromJSONTyped(json, false);
}
export function ResolutionStatementDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'unresolved': ResolutionStatementDTOUnresolvedFromJSON(json['unresolved']),
        'resolutionEntries': (json['resolutionEntries'].map(ResolutionEntryDTOFromJSON)),
    };
}
export function ResolutionStatementDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'unresolved': ResolutionStatementDTOUnresolvedToJSON(value.unresolved),
        'resolutionEntries': (value.resolutionEntries.map(ResolutionEntryDTOToJSON)),
    };
}
