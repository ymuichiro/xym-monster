import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MultisigAccountModificationTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    minRemovalDelta: number;
    minApprovalDelta: number;
    addressAdditions: Array<string>;
    addressDeletions: Array<string>;
}
export declare function instanceOfMultisigAccountModificationTransactionDTO(value: object): boolean;
export declare function MultisigAccountModificationTransactionDTOFromJSON(json: any): MultisigAccountModificationTransactionDTO;
export declare function MultisigAccountModificationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountModificationTransactionDTO;
export declare function MultisigAccountModificationTransactionDTOToJSON(value?: MultisigAccountModificationTransactionDTO | null): any;
