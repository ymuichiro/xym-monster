export interface TransactionFeesDTO {
    averageFeeMultiplier: number;
    medianFeeMultiplier: number;
    highestFeeMultiplier: number;
    lowestFeeMultiplier: number;
    minFeeMultiplier: number;
}
export declare function instanceOfTransactionFeesDTO(value: object): boolean;
export declare function TransactionFeesDTOFromJSON(json: any): TransactionFeesDTO;
export declare function TransactionFeesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFeesDTO;
export declare function TransactionFeesDTOToJSON(value?: TransactionFeesDTO | null): any;
