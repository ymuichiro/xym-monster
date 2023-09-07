import type { MosaicDTO } from './MosaicDTO';
export interface MosaicInfoDTO {
    id: string;
    mosaic: MosaicDTO;
}
export declare function instanceOfMosaicInfoDTO(value: object): boolean;
export declare function MosaicInfoDTOFromJSON(json: any): MosaicInfoDTO;
export declare function MosaicInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicInfoDTO;
export declare function MosaicInfoDTOToJSON(value?: MosaicInfoDTO | null): any;
