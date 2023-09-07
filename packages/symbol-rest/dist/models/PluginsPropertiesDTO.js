import { exists } from '../runtime';
import { AccountKeyLinkNetworkPropertiesDTOFromJSON, AccountKeyLinkNetworkPropertiesDTOToJSON, } from './AccountKeyLinkNetworkPropertiesDTO';
import { AccountRestrictionNetworkPropertiesDTOFromJSON, AccountRestrictionNetworkPropertiesDTOToJSON, } from './AccountRestrictionNetworkPropertiesDTO';
import { AggregateNetworkPropertiesDTOFromJSON, AggregateNetworkPropertiesDTOToJSON, } from './AggregateNetworkPropertiesDTO';
import { HashLockNetworkPropertiesDTOFromJSON, HashLockNetworkPropertiesDTOToJSON, } from './HashLockNetworkPropertiesDTO';
import { MetadataNetworkPropertiesDTOFromJSON, MetadataNetworkPropertiesDTOToJSON, } from './MetadataNetworkPropertiesDTO';
import { MosaicNetworkPropertiesDTOFromJSON, MosaicNetworkPropertiesDTOToJSON, } from './MosaicNetworkPropertiesDTO';
import { MosaicRestrictionNetworkPropertiesDTOFromJSON, MosaicRestrictionNetworkPropertiesDTOToJSON, } from './MosaicRestrictionNetworkPropertiesDTO';
import { MultisigNetworkPropertiesDTOFromJSON, MultisigNetworkPropertiesDTOToJSON, } from './MultisigNetworkPropertiesDTO';
import { NamespaceNetworkPropertiesDTOFromJSON, NamespaceNetworkPropertiesDTOToJSON, } from './NamespaceNetworkPropertiesDTO';
import { SecretLockNetworkPropertiesDTOFromJSON, SecretLockNetworkPropertiesDTOToJSON, } from './SecretLockNetworkPropertiesDTO';
import { TransferNetworkPropertiesDTOFromJSON, TransferNetworkPropertiesDTOToJSON, } from './TransferNetworkPropertiesDTO';
export function instanceOfPluginsPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function PluginsPropertiesDTOFromJSON(json) {
    return PluginsPropertiesDTOFromJSONTyped(json, false);
}
export function PluginsPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountlink': !exists(json, 'accountlink') ? undefined : AccountKeyLinkNetworkPropertiesDTOFromJSON(json['accountlink']),
        'aggregate': !exists(json, 'aggregate') ? undefined : AggregateNetworkPropertiesDTOFromJSON(json['aggregate']),
        'lockhash': !exists(json, 'lockhash') ? undefined : HashLockNetworkPropertiesDTOFromJSON(json['lockhash']),
        'locksecret': !exists(json, 'locksecret') ? undefined : SecretLockNetworkPropertiesDTOFromJSON(json['locksecret']),
        'metadata': !exists(json, 'metadata') ? undefined : MetadataNetworkPropertiesDTOFromJSON(json['metadata']),
        'mosaic': !exists(json, 'mosaic') ? undefined : MosaicNetworkPropertiesDTOFromJSON(json['mosaic']),
        'multisig': !exists(json, 'multisig') ? undefined : MultisigNetworkPropertiesDTOFromJSON(json['multisig']),
        'namespace': !exists(json, 'namespace') ? undefined : NamespaceNetworkPropertiesDTOFromJSON(json['namespace']),
        'restrictionaccount': !exists(json, 'restrictionaccount') ? undefined : AccountRestrictionNetworkPropertiesDTOFromJSON(json['restrictionaccount']),
        'restrictionmosaic': !exists(json, 'restrictionmosaic') ? undefined : MosaicRestrictionNetworkPropertiesDTOFromJSON(json['restrictionmosaic']),
        'transfer': !exists(json, 'transfer') ? undefined : TransferNetworkPropertiesDTOFromJSON(json['transfer']),
    };
}
export function PluginsPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountlink': AccountKeyLinkNetworkPropertiesDTOToJSON(value.accountlink),
        'aggregate': AggregateNetworkPropertiesDTOToJSON(value.aggregate),
        'lockhash': HashLockNetworkPropertiesDTOToJSON(value.lockhash),
        'locksecret': SecretLockNetworkPropertiesDTOToJSON(value.locksecret),
        'metadata': MetadataNetworkPropertiesDTOToJSON(value.metadata),
        'mosaic': MosaicNetworkPropertiesDTOToJSON(value.mosaic),
        'multisig': MultisigNetworkPropertiesDTOToJSON(value.multisig),
        'namespace': NamespaceNetworkPropertiesDTOToJSON(value.namespace),
        'restrictionaccount': AccountRestrictionNetworkPropertiesDTOToJSON(value.restrictionaccount),
        'restrictionmosaic': MosaicRestrictionNetworkPropertiesDTOToJSON(value.restrictionmosaic),
        'transfer': TransferNetworkPropertiesDTOToJSON(value.transfer),
    };
}
