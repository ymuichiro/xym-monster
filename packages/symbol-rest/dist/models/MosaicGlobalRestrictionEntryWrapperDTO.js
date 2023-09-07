import { MosaicGlobalRestrictionEntryDTOFromJSON, MosaicGlobalRestrictionEntryDTOToJSON, } from './MosaicGlobalRestrictionEntryDTO';
import { MosaicRestrictionEntryTypeEnumFromJSON, MosaicRestrictionEntryTypeEnumToJSON, } from './MosaicRestrictionEntryTypeEnum';
export function instanceOfMosaicGlobalRestrictionEntryWrapperDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "compositeHash" in value;
    isInstance = isInstance && "entryType" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "restrictions" in value;
    return isInstance;
}
export function MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json) {
    return MosaicGlobalRestrictionEntryWrapperDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionEntryWrapperDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'compositeHash': json['compositeHash'],
        'entryType': MosaicRestrictionEntryTypeEnumFromJSON(json['entryType']),
        'mosaicId': json['mosaicId'],
        'restrictions': (json['restrictions'].map(MosaicGlobalRestrictionEntryDTOFromJSON)),
    };
}
export function MosaicGlobalRestrictionEntryWrapperDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'compositeHash': value.compositeHash,
        'entryType': MosaicRestrictionEntryTypeEnumToJSON(value.entryType),
        'mosaicId': value.mosaicId,
        'restrictions': (value.restrictions.map(MosaicGlobalRestrictionEntryDTOToJSON)),
    };
}
