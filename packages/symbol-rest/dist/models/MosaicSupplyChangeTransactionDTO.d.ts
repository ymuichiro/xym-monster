import type { MosaicSupplyChangeActionEnum } from './MosaicSupplyChangeActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface MosaicSupplyChangeTransactionDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    mosaicId: string;
    delta: string;
    action: MosaicSupplyChangeActionEnum;
}
export declare function instanceOfMosaicSupplyChangeTransactionDTO(value: object): boolean;
export declare function MosaicSupplyChangeTransactionDTOFromJSON(json: any): MosaicSupplyChangeTransactionDTO;
export declare function MosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyChangeTransactionDTO;
export declare function MosaicSupplyChangeTransactionDTOToJSON(value?: MosaicSupplyChangeTransactionDTO | null): any;
