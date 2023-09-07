export interface MultisigAccountModificationTransactionBodyDTO {
    minRemovalDelta: number;
    minApprovalDelta: number;
    addressAdditions: Array<string>;
    addressDeletions: Array<string>;
}
export declare function instanceOfMultisigAccountModificationTransactionBodyDTO(value: object): boolean;
export declare function MultisigAccountModificationTransactionBodyDTOFromJSON(json: any): MultisigAccountModificationTransactionBodyDTO;
export declare function MultisigAccountModificationTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountModificationTransactionBodyDTO;
export declare function MultisigAccountModificationTransactionBodyDTOToJSON(value?: MultisigAccountModificationTransactionBodyDTO | null): any;
