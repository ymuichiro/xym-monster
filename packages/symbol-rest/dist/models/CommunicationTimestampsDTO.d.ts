export interface CommunicationTimestampsDTO {
    sendTimestamp?: string;
    receiveTimestamp?: string;
}
export declare function instanceOfCommunicationTimestampsDTO(value: object): boolean;
export declare function CommunicationTimestampsDTOFromJSON(json: any): CommunicationTimestampsDTO;
export declare function CommunicationTimestampsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTimestampsDTO;
export declare function CommunicationTimestampsDTOToJSON(value?: CommunicationTimestampsDTO | null): any;
