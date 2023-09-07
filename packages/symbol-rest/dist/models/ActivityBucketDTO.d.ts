export interface ActivityBucketDTO {
    startHeight: string;
    totalFeesPaid: string;
    beneficiaryCount: number;
    rawScore: string;
}
export declare function instanceOfActivityBucketDTO(value: object): boolean;
export declare function ActivityBucketDTOFromJSON(json: any): ActivityBucketDTO;
export declare function ActivityBucketDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityBucketDTO;
export declare function ActivityBucketDTOToJSON(value?: ActivityBucketDTO | null): any;
