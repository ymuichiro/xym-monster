import type { HashLockEntryDTO } from './HashLockEntryDTO';
export interface HashLockInfoDTO {
    id: string;
    lock: HashLockEntryDTO;
}
export declare function instanceOfHashLockInfoDTO(value: object): boolean;
export declare function HashLockInfoDTOFromJSON(json: any): HashLockInfoDTO;
export declare function HashLockInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HashLockInfoDTO;
export declare function HashLockInfoDTOToJSON(value?: HashLockInfoDTO | null): any;
