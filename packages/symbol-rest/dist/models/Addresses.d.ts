export interface Addresses {
    addresses?: Array<string>;
}
export declare function instanceOfAddresses(value: object): boolean;
export declare function AddressesFromJSON(json: any): Addresses;
export declare function AddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Addresses;
export declare function AddressesToJSON(value?: Addresses | null): any;
