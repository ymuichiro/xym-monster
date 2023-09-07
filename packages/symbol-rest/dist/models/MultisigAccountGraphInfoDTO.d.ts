import type { MultisigAccountInfoDTO } from './MultisigAccountInfoDTO';
export interface MultisigAccountGraphInfoDTO {
    level: number;
    multisigEntries: Array<MultisigAccountInfoDTO>;
}
export declare function instanceOfMultisigAccountGraphInfoDTO(value: object): boolean;
export declare function MultisigAccountGraphInfoDTOFromJSON(json: any): MultisigAccountGraphInfoDTO;
export declare function MultisigAccountGraphInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountGraphInfoDTO;
export declare function MultisigAccountGraphInfoDTOToJSON(value?: MultisigAccountGraphInfoDTO | null): any;
