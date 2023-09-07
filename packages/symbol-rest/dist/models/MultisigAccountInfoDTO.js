import { MultisigDTOFromJSON, MultisigDTOToJSON, } from './MultisigDTO';
export function instanceOfMultisigAccountInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "multisig" in value;
    return isInstance;
}
export function MultisigAccountInfoDTOFromJSON(json) {
    return MultisigAccountInfoDTOFromJSONTyped(json, false);
}
export function MultisigAccountInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'multisig': MultisigDTOFromJSON(json['multisig']),
    };
}
export function MultisigAccountInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'multisig': MultisigDTOToJSON(value.multisig),
    };
}
