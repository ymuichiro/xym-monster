import type { CosignatureDTO } from './CosignatureDTO';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
export interface AggregateTransactionDTO {
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
}
export declare function instanceOfAggregateTransactionDTO(value: object): boolean;
export declare function AggregateTransactionDTOFromJSON(json: any): AggregateTransactionDTO;
export declare function AggregateTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateTransactionDTO;
export declare function AggregateTransactionDTOToJSON(value?: AggregateTransactionDTO | null): any;
