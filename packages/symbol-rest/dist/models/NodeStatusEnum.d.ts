export declare const NodeStatusEnum: {
    readonly Up: "up";
    readonly Down: "down";
};
export type NodeStatusEnum = typeof NodeStatusEnum[keyof typeof NodeStatusEnum];
export declare function NodeStatusEnumFromJSON(json: any): NodeStatusEnum;
export declare function NodeStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStatusEnum;
export declare function NodeStatusEnumToJSON(value?: NodeStatusEnum | null): any;
