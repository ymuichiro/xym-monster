export interface HashLockNetworkPropertiesDTO {
    lockedFundsPerAggregate?: string;
    maxHashLockDuration?: string;
}
export declare function instanceOfHashLockNetworkPropertiesDTO(value: object): boolean;
export declare function HashLockNetworkPropertiesDTOFromJSON(json: any): HashLockNetworkPropertiesDTO;
export declare function HashLockNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockNetworkPropertiesDTO;
export declare function HashLockNetworkPropertiesDTOToJSON(value?: HashLockNetworkPropertiesDTO | null): any;
