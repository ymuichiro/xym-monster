export interface NamespaceNameDTO {
    parentId?: string;
    id: string;
    name: string;
}
export declare function instanceOfNamespaceNameDTO(value: object): boolean;
export declare function NamespaceNameDTOFromJSON(json: any): NamespaceNameDTO;
export declare function NamespaceNameDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceNameDTO;
export declare function NamespaceNameDTOToJSON(value?: NamespaceNameDTO | null): any;
