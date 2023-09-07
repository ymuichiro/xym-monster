import { AccountRestrictionDTOFromJSON, AccountRestrictionDTOToJSON, } from './AccountRestrictionDTO';
export function instanceOfAccountRestrictionsDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "restrictions" in value;
    return isInstance;
}
export function AccountRestrictionsDTOFromJSON(json) {
    return AccountRestrictionsDTOFromJSONTyped(json, false);
}
export function AccountRestrictionsDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'address': json['address'],
        'restrictions': (json['restrictions'].map(AccountRestrictionDTOFromJSON)),
    };
}
export function AccountRestrictionsDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'address': value.address,
        'restrictions': (value.restrictions.map(AccountRestrictionDTOToJSON)),
    };
}
