export interface TransactionBodyDTO {
    maxFee: string;
    deadline: string;
}
export declare function instanceOfTransactionBodyDTO(value: object): boolean;
export declare function TransactionBodyDTOFromJSON(json: any): TransactionBodyDTO;
export declare function TransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionBodyDTO;
export declare function TransactionBodyDTOToJSON(value?: TransactionBodyDTO | null): any;
