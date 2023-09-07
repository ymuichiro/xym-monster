export interface StorageInfoDTO {
    numBlocks: number;
    numTransactions: number;
    numAccounts: number;
}
export declare function instanceOfStorageInfoDTO(value: object): boolean;
export declare function StorageInfoDTOFromJSON(json: any): StorageInfoDTO;
export declare function StorageInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageInfoDTO;
export declare function StorageInfoDTOToJSON(value?: StorageInfoDTO | null): any;
