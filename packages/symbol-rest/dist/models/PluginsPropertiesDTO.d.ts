import type { AccountKeyLinkNetworkPropertiesDTO } from './AccountKeyLinkNetworkPropertiesDTO';
import type { AccountRestrictionNetworkPropertiesDTO } from './AccountRestrictionNetworkPropertiesDTO';
import type { AggregateNetworkPropertiesDTO } from './AggregateNetworkPropertiesDTO';
import type { HashLockNetworkPropertiesDTO } from './HashLockNetworkPropertiesDTO';
import type { MetadataNetworkPropertiesDTO } from './MetadataNetworkPropertiesDTO';
import type { MosaicNetworkPropertiesDTO } from './MosaicNetworkPropertiesDTO';
import type { MosaicRestrictionNetworkPropertiesDTO } from './MosaicRestrictionNetworkPropertiesDTO';
import type { MultisigNetworkPropertiesDTO } from './MultisigNetworkPropertiesDTO';
import type { NamespaceNetworkPropertiesDTO } from './NamespaceNetworkPropertiesDTO';
import type { SecretLockNetworkPropertiesDTO } from './SecretLockNetworkPropertiesDTO';
import type { TransferNetworkPropertiesDTO } from './TransferNetworkPropertiesDTO';
export interface PluginsPropertiesDTO {
    accountlink?: AccountKeyLinkNetworkPropertiesDTO;
    aggregate?: AggregateNetworkPropertiesDTO;
    lockhash?: HashLockNetworkPropertiesDTO;
    locksecret?: SecretLockNetworkPropertiesDTO;
    metadata?: MetadataNetworkPropertiesDTO;
    mosaic?: MosaicNetworkPropertiesDTO;
    multisig?: MultisigNetworkPropertiesDTO;
    namespace?: NamespaceNetworkPropertiesDTO;
    restrictionaccount?: AccountRestrictionNetworkPropertiesDTO;
    restrictionmosaic?: MosaicRestrictionNetworkPropertiesDTO;
    transfer?: TransferNetworkPropertiesDTO;
}
export declare function instanceOfPluginsPropertiesDTO(value: object): boolean;
export declare function PluginsPropertiesDTOFromJSON(json: any): PluginsPropertiesDTO;
export declare function PluginsPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsPropertiesDTO;
export declare function PluginsPropertiesDTOToJSON(value?: PluginsPropertiesDTO | null): any;
