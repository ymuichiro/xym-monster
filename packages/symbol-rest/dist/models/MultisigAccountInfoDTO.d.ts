import type { MultisigDTO } from './MultisigDTO';
export interface MultisigAccountInfoDTO {
    multisig: MultisigDTO;
}
export declare function instanceOfMultisigAccountInfoDTO(value: object): boolean;
export declare function MultisigAccountInfoDTOFromJSON(json: any): MultisigAccountInfoDTO;
export declare function MultisigAccountInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountInfoDTO;
export declare function MultisigAccountInfoDTOToJSON(value?: MultisigAccountInfoDTO | null): any;
