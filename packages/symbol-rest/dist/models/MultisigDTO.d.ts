export interface MultisigDTO {
    version: number;
    accountAddress: string;
    minApproval: number;
    minRemoval: number;
    cosignatoryAddresses: Array<string>;
    multisigAddresses: Array<string>;
}
export declare function instanceOfMultisigDTO(value: object): boolean;
export declare function MultisigDTOFromJSON(json: any): MultisigDTO;
export declare function MultisigDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigDTO;
export declare function MultisigDTOToJSON(value?: MultisigDTO | null): any;
