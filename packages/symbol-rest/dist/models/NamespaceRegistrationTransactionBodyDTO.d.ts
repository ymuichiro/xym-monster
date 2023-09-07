import type { NamespaceRegistrationTypeEnum } from './NamespaceRegistrationTypeEnum';
export interface NamespaceRegistrationTransactionBodyDTO {
    duration?: string;
    parentId?: string;
    id: string;
    registrationType: NamespaceRegistrationTypeEnum;
    name: string;
}
export declare function instanceOfNamespaceRegistrationTransactionBodyDTO(value: object): boolean;
export declare function NamespaceRegistrationTransactionBodyDTOFromJSON(json: any): NamespaceRegistrationTransactionBodyDTO;
export declare function NamespaceRegistrationTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTransactionBodyDTO;
export declare function NamespaceRegistrationTransactionBodyDTOToJSON(value?: NamespaceRegistrationTransactionBodyDTO | null): any;
