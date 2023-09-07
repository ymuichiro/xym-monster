export interface AggregateNetworkPropertiesDTO {
    maxTransactionsPerAggregate?: string;
    maxCosignaturesPerAggregate?: string;
    enableStrictCosignatureCheck?: boolean;
    enableBondedAggregateSupport?: boolean;
    maxBondedTransactionLifetime?: string;
}
export declare function instanceOfAggregateNetworkPropertiesDTO(value: object): boolean;
export declare function AggregateNetworkPropertiesDTOFromJSON(json: any): AggregateNetworkPropertiesDTO;
export declare function AggregateNetworkPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateNetworkPropertiesDTO;
export declare function AggregateNetworkPropertiesDTOToJSON(value?: AggregateNetworkPropertiesDTO | null): any;
