import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EntityDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
}
export declare function instanceOfEntityDTO(value: object): boolean;
export declare function EntityDTOFromJSON(json: any): EntityDTO;
export declare function EntityDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityDTO;
export declare function EntityDTOToJSON(value?: EntityDTO | null): any;
