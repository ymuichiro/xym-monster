import { MultisigAccountInfoDTOFromJSON, MultisigAccountInfoDTOToJSON, } from './MultisigAccountInfoDTO';
export function instanceOfMultisigAccountGraphInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "level" in value;
    isInstance = isInstance && "multisigEntries" in value;
    return isInstance;
}
export function MultisigAccountGraphInfoDTOFromJSON(json) {
    return MultisigAccountGraphInfoDTOFromJSONTyped(json, false);
}
export function MultisigAccountGraphInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'level': json['level'],
        'multisigEntries': (json['multisigEntries'].map(MultisigAccountInfoDTOFromJSON)),
    };
}
export function MultisigAccountGraphInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'level': value.level,
        'multisigEntries': (value.multisigEntries.map(MultisigAccountInfoDTOToJSON)),
    };
}
