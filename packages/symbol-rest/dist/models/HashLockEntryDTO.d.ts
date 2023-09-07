import type { LockStatus } from './LockStatus';
export interface HashLockEntryDTO {
    version: number;
    ownerAddress: string;
    mosaicId: string;
    amount: string;
    endHeight: string;
    status: LockStatus;
    hash: string;
}
export declare function instanceOfHashLockEntryDTO(value: object): boolean;
export declare function HashLockEntryDTOFromJSON(json: any): HashLockEntryDTO;
export declare function HashLockEntryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockEntryDTO;
export declare function HashLockEntryDTOToJSON(value?: HashLockEntryDTO | null): any;
