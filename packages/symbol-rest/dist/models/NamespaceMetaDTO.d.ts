export interface NamespaceMetaDTO {
    active: boolean;
    index: number;
}
export declare function instanceOfNamespaceMetaDTO(value: object): boolean;
export declare function NamespaceMetaDTOFromJSON(json: any): NamespaceMetaDTO;
export declare function NamespaceMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetaDTO;
export declare function NamespaceMetaDTOToJSON(value?: NamespaceMetaDTO | null): any;
