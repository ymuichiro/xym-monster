export declare const NodeIdentityEqualityStrategy: {
    readonly Host: "host";
    readonly PublicKey: "public-key";
};
export type NodeIdentityEqualityStrategy = typeof NodeIdentityEqualityStrategy[keyof typeof NodeIdentityEqualityStrategy];
export declare function NodeIdentityEqualityStrategyFromJSON(json: any): NodeIdentityEqualityStrategy;
export declare function NodeIdentityEqualityStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeIdentityEqualityStrategy;
export declare function NodeIdentityEqualityStrategyToJSON(value?: NodeIdentityEqualityStrategy | null): any;
