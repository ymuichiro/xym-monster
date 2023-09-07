export declare const LinkActionEnum: {
    readonly NUMBER_0: 0;
    readonly NUMBER_1: 1;
};
export type LinkActionEnum = typeof LinkActionEnum[keyof typeof LinkActionEnum];
export declare function LinkActionEnumFromJSON(json: any): LinkActionEnum;
export declare function LinkActionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkActionEnum;
export declare function LinkActionEnumToJSON(value?: LinkActionEnum | null): any;
