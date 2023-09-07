import type { AliasTypeEnum } from './AliasTypeEnum';
export interface AliasDTO {
    type: AliasTypeEnum;
    mosaicId?: string;
    address?: string;
}
export declare function instanceOfAliasDTO(value: object): boolean;
export declare function AliasDTOFromJSON(json: any): AliasDTO;
export declare function AliasDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasDTO;
export declare function AliasDTOToJSON(value?: AliasDTO | null): any;
