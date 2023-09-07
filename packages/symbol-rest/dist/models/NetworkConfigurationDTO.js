import { ChainPropertiesDTOFromJSON, ChainPropertiesDTOToJSON, } from './ChainPropertiesDTO';
import { NetworkPropertiesDTOFromJSON, NetworkPropertiesDTOToJSON, } from './NetworkPropertiesDTO';
import { PluginsPropertiesDTOFromJSON, PluginsPropertiesDTOToJSON, } from './PluginsPropertiesDTO';
export function instanceOfNetworkConfigurationDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "plugins" in value;
    return isInstance;
}
export function NetworkConfigurationDTOFromJSON(json) {
    return NetworkConfigurationDTOFromJSONTyped(json, false);
}
export function NetworkConfigurationDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'network': NetworkPropertiesDTOFromJSON(json['network']),
        'chain': ChainPropertiesDTOFromJSON(json['chain']),
        'plugins': PluginsPropertiesDTOFromJSON(json['plugins']),
    };
}
export function NetworkConfigurationDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'network': NetworkPropertiesDTOToJSON(value.network),
        'chain': ChainPropertiesDTOToJSON(value.chain),
        'plugins': PluginsPropertiesDTOToJSON(value.plugins),
    };
}
