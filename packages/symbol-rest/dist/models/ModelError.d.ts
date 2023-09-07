export interface ModelError {
    code: string;
    message: string;
}
export declare function instanceOfModelError(value: object): boolean;
export declare function ModelErrorFromJSON(json: any): ModelError;
export declare function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
export declare function ModelErrorToJSON(value?: ModelError | null): any;
