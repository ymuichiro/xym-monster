export declare const PositionEnum: {
    readonly Left: "left";
    readonly Right: "right";
};
export type PositionEnum = typeof PositionEnum[keyof typeof PositionEnum];
export declare function PositionEnumFromJSON(json: any): PositionEnum;
export declare function PositionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PositionEnum;
export declare function PositionEnumToJSON(value?: PositionEnum | null): any;
