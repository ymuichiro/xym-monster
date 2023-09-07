import type { NamespaceRegistrationTypeEnum } from './NamespaceRegistrationTypeEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedNamespaceRegistrationTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    duration?: string;
    parentId?: string;
    id: string;
    registrationType: NamespaceRegistrationTypeEnum;
    name: string;
}
export declare function instanceOfEmbeddedNamespaceRegistrationTransactionDTO(value: object): boolean;
export declare function EmbeddedNamespaceRegistrationTransactionDTOFromJSON(json: any): EmbeddedNamespaceRegistrationTransactionDTO;
export declare function EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedNamespaceRegistrationTransactionDTO;
export declare function EmbeddedNamespaceRegistrationTransactionDTOToJSON(value?: EmbeddedNamespaceRegistrationTransactionDTO | null): any;
