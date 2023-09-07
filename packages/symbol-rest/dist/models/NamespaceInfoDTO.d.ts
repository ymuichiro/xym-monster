import type { NamespaceDTO } from './NamespaceDTO';
import type { NamespaceMetaDTO } from './NamespaceMetaDTO';
export interface NamespaceInfoDTO {
    id: string;
    meta: NamespaceMetaDTO;
    namespace: NamespaceDTO;
}
export declare function instanceOfNamespaceInfoDTO(value: object): boolean;
export declare function NamespaceInfoDTOFromJSON(json: any): NamespaceInfoDTO;
export declare function NamespaceInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceInfoDTO;
export declare function NamespaceInfoDTOToJSON(value?: NamespaceInfoDTO | null): any;
