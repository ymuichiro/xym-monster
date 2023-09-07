import { exists } from '../runtime';
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedAccountAddressRestrictionTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "restrictionFlags" in value;
    return isInstance;
}
export function EmbeddedAccountAddressRestrictionTransactionDTOFromJSON(json) {
    return EmbeddedAccountAddressRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedAccountAddressRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': !exists(json, 'restrictionAdditions') ? undefined : json['restrictionAdditions'],
        'restrictionDeletions': !exists(json, 'restrictionDeletions') ? undefined : json['restrictionDeletions'],
    };
}
export function EmbeddedAccountAddressRestrictionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions,
        'restrictionDeletions': value.restrictionDeletions,
    };
}
