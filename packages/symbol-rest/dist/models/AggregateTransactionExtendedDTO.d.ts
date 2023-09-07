import type { CosignatureDTO } from './CosignatureDTO';
import type { EmbeddedTransactionInfoDTO } from './EmbeddedTransactionInfoDTO';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AggregateTransactionExtendedDTO {
    size: number;
    signature: string;
    signerPublicKey: string;
    version: number;
    network: NetworkTypeEnum;
    type: number;
    maxFee: string;
    deadline: string;
    transactionsHash: string;
    cosignatures: Array<CosignatureDTO>;
    transactions: Array<EmbeddedTransactionInfoDTO>;
}
export declare function instanceOfAggregateTransactionExtendedDTO(value: object): boolean;
export declare function AggregateTransactionExtendedDTOFromJSON(json: any): AggregateTransactionExtendedDTO;
export declare function AggregateTransactionExtendedDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionExtendedDTO;
export declare function AggregateTransactionExtendedDTOToJSON(value?: AggregateTransactionExtendedDTO | null): any;
