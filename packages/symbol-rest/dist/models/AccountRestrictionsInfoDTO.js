import { AccountRestrictionsDTOFromJSON, AccountRestrictionsDTOToJSON, } from './AccountRestrictionsDTO';
export function instanceOfAccountRestrictionsInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "accountRestrictions" in value;
    return isInstance;
}
export function AccountRestrictionsInfoDTOFromJSON(json) {
    return AccountRestrictionsInfoDTOFromJSONTyped(json, false);
}
export function AccountRestrictionsInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountRestrictions': AccountRestrictionsDTOFromJSON(json['accountRestrictions']),
    };
}
export function AccountRestrictionsInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountRestrictions': AccountRestrictionsDTOToJSON(value.accountRestrictions),
    };
}
