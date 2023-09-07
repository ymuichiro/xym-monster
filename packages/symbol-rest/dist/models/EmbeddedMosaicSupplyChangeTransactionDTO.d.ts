import type { MosaicSupplyChangeActionEnum } from './MosaicSupplyChangeActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface EmbeddedMosaicSupplyChangeTransactionDTO {
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    mosaicId: string;
    delta: string;
    action: MosaicSupplyChangeActionEnum;
}
export declare function instanceOfEmbeddedMosaicSupplyChangeTransactionDTO(value: object): boolean;
export declare function EmbeddedMosaicSupplyChangeTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyChangeTransactionDTO;
export declare function EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyChangeTransactionDTO;
export declare function EmbeddedMosaicSupplyChangeTransactionDTOToJSON(value?: EmbeddedMosaicSupplyChangeTransactionDTO | null): any;
