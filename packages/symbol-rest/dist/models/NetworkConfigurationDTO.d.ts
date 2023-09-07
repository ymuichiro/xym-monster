import type { ChainPropertiesDTO } from './ChainPropertiesDTO';
import type { NetworkPropertiesDTO } from './NetworkPropertiesDTO';
import type { PluginsPropertiesDTO } from './PluginsPropertiesDTO';
export interface NetworkConfigurationDTO {
    network: NetworkPropertiesDTO;
    chain: ChainPropertiesDTO;
    plugins: PluginsPropertiesDTO;
}
export declare function instanceOfNetworkConfigurationDTO(value: object): boolean;
export declare function NetworkConfigurationDTOFromJSON(json: any): NetworkConfigurationDTO;
export declare function NetworkConfigurationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkConfigurationDTO;
export declare function NetworkConfigurationDTOToJSON(value?: NetworkConfigurationDTO | null): any;
