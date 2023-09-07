import type { MessageGroup } from './MessageGroup';
export interface FinalizationProofDTO {
    version: number;
    finalizationEpoch: number;
    finalizationPoint: number;
    height: string;
    hash: string;
    messageGroups: Array<MessageGroup>;
}
export declare function instanceOfFinalizationProofDTO(value: object): boolean;
export declare function FinalizationProofDTOFromJSON(json: any): FinalizationProofDTO;
export declare function FinalizationProofDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalizationProofDTO;
export declare function FinalizationProofDTOToJSON(value?: FinalizationProofDTO | null): any;
