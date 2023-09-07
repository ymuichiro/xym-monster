import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMultisigAccountModificationTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    minRemovalDelta: number;
    minApprovalDelta: number;
    addressAdditions: Array<string>;
    addressDeletions: Array<string>;
}
export declare function instanceOfEmbeddedMultisigAccountModificationTransactionDTO(value: object): boolean;
export declare function EmbeddedMultisigAccountModificationTransactionDTOFromJSON(json: any): EmbeddedMultisigAccountModificationTransactionDTO;
export declare function EmbeddedMultisigAccountModificationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMultisigAccountModificationTransactionDTO;
export declare function EmbeddedMultisigAccountModificationTransactionDTOToJSON(value?: EmbeddedMultisigAccountModificationTransactionDTO | null): any;
