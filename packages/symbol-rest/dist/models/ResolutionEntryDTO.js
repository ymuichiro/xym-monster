import { ResolutionEntryDTOResolvedFromJSON, ResolutionEntryDTOResolvedToJSON, } from './ResolutionEntryDTOResolved';
import { SourceDTOFromJSON, SourceDTOToJSON, } from './SourceDTO';
export function instanceOfResolutionEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "resolved" in value;
    return isInstance;
}
export function ResolutionEntryDTOFromJSON(json) {
    return ResolutionEntryDTOFromJSONTyped(json, false);
}
export function ResolutionEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'source': SourceDTOFromJSON(json['source']),
        'resolved': ResolutionEntryDTOResolvedFromJSON(json['resolved']),
    };
}
export function ResolutionEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'source': SourceDTOToJSON(value.source),
        'resolved': ResolutionEntryDTOResolvedToJSON(value.resolved),
    };
}
