export interface HashLockTransactionBodyDTO {
    mosaicId: string;
    amount: string;
    duration: string;
    hash: string;
}
export declare function instanceOfHashLockTransactionBodyDTO(value: object): boolean;
export declare function HashLockTransactionBodyDTOFromJSON(json: any): HashLockTransactionBodyDTO;
export declare function HashLockTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockTransactionBodyDTO;
export declare function HashLockTransactionBodyDTOToJSON(value?: HashLockTransactionBodyDTO | null): any;
