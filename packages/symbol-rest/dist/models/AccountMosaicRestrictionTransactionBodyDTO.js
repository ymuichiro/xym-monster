import { exists } from '../runtime';
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
export function instanceOfAccountMosaicRestrictionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;
    return isInstance;
}
export function AccountMosaicRestrictionTransactionBodyDTOFromJSON(json) {
    return AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function AccountMosaicRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': !exists(json, 'restrictionAdditions') ? undefined : json['restrictionAdditions'],
        'restrictionDeletions': !exists(json, 'restrictionDeletions') ? undefined : json['restrictionDeletions'],
    };
}
export function AccountMosaicRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions,
        'restrictionDeletions': value.restrictionDeletions,
    };
}
