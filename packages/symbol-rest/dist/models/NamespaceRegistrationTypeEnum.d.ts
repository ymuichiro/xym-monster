export declare const NamespaceRegistrationTypeEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type NamespaceRegistrationTypeEnum = typeof NamespaceRegistrationTypeEnum[keyof typeof NamespaceRegistrationTypeEnum];
export declare function NamespaceRegistrationTypeEnumFromJSON(json: any): NamespaceRegistrationTypeEnum;
export declare function NamespaceRegistrationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTypeEnum;
export declare function NamespaceRegistrationTypeEnumToJSON(value?: NamespaceRegistrationTypeEnum | null): any;
