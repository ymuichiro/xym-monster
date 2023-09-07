import type { NamespaceRegistrationTypeEnum } from './NamespaceRegistrationTypeEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface NamespaceRegistrationTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    duration?: string;
    parentId?: string;
    id: string;
    registrationType: NamespaceRegistrationTypeEnum;
    name: string;
}
export declare function instanceOfNamespaceRegistrationTransactionDTO(value: object): boolean;
export declare function NamespaceRegistrationTransactionDTOFromJSON(json: any): NamespaceRegistrationTransactionDTO;
export declare function NamespaceRegistrationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTransactionDTO;
export declare function NamespaceRegistrationTransactionDTOToJSON(value?: NamespaceRegistrationTransactionDTO | null): any;
