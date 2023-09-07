export interface NamespaceIds {
    namespaceIds?: Array<string>;
}
export declare function instanceOfNamespaceIds(value: object): boolean;
export declare function NamespaceIdsFromJSON(json: any): NamespaceIds;
export declare function NamespaceIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceIds;
export declare function NamespaceIdsToJSON(value?: NamespaceIds | null): any;
