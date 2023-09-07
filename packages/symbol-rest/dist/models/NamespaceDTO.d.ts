import type { AliasDTO } from './AliasDTO';
import type { NamespaceRegistrationTypeEnum } from './NamespaceRegistrationTypeEnum';
export interface NamespaceDTO {
    version: number;
    registrationType: NamespaceRegistrationTypeEnum;
    depth: number;
    level0: string;
    level1?: string;
    level2?: string;
    alias: AliasDTO;
    parentId: string;
    ownerAddress: string;
    startHeight: string;
    endHeight: string;
}
export declare function instanceOfNamespaceDTO(value: object): boolean;
export declare function NamespaceDTOFromJSON(json: any): NamespaceDTO;
export declare function NamespaceDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceDTO;
export declare function NamespaceDTOToJSON(value?: NamespaceDTO | null): any;
