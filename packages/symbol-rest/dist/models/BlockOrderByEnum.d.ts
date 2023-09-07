export declare const BlockOrderByEnum: {
    readonly Id: "id";
    readonly Height: "height";
};
export type BlockOrderByEnum = typeof BlockOrderByEnum[keyof typeof BlockOrderByEnum];
export declare function BlockOrderByEnumFromJSON(json: any): BlockOrderByEnum;
export declare function BlockOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOrderByEnum;
export declare function BlockOrderByEnumToJSON(value?: BlockOrderByEnum | null): any;
