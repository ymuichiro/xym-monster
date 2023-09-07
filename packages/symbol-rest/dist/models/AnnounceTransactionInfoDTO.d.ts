export interface AnnounceTransactionInfoDTO {
    message: string;
}
export declare function instanceOfAnnounceTransactionInfoDTO(value: object): boolean;
export declare function AnnounceTransactionInfoDTOFromJSON(json: any): AnnounceTransactionInfoDTO;
export declare function AnnounceTransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnounceTransactionInfoDTO;
export declare function AnnounceTransactionInfoDTOToJSON(value?: AnnounceTransactionInfoDTO | null): any;
