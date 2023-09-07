export interface MosaicDTO {
    version: number;
    id: string;
    supply: string;
    startHeight: string;
    ownerAddress: string;
    revision: number;
    flags: number;
    divisibility: number;
    duration: string;
}
export declare function instanceOfMosaicDTO(value: object): boolean;
export declare function MosaicDTOFromJSON(json: any): MosaicDTO;
export declare function MosaicDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDTO;
export declare function MosaicDTOToJSON(value?: MosaicDTO | null): any;
