import { AccountRestrictionDTOValuesInnerFromJSON, AccountRestrictionDTOValuesInnerToJSON, } from './AccountRestrictionDTOValuesInner';
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
export function instanceOfAccountRestrictionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "values" in value;
    return isInstance;
}
export function AccountRestrictionDTOFromJSON(json) {
    return AccountRestrictionDTOFromJSONTyped(json, false);
}
export function AccountRestrictionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'values': (json['values'].map(AccountRestrictionDTOValuesInnerFromJSON)),
    };
}
export function AccountRestrictionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'values': (value.values.map(AccountRestrictionDTOValuesInnerToJSON)),
    };
}
