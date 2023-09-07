export declare const Order: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type Order = typeof Order[keyof typeof Order];
export declare function OrderFromJSON(json: any): Order;
export declare function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order;
export declare function OrderToJSON(value?: Order | null): any;
