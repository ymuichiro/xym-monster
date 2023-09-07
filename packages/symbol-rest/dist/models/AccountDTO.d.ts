import type { AccountTypeEnum } from './AccountTypeEnum';
import type { ActivityBucketDTO } from './ActivityBucketDTO';
import type { Mosaic } from './Mosaic';
import type { SupplementalPublicKeysDTO } from './SupplementalPublicKeysDTO';
export interface AccountDTO {
    version: number;
    address: string;
    addressHeight: string;
    publicKey: string;
    publicKeyHeight: string;
    accountType: AccountTypeEnum;
    supplementalPublicKeys: SupplementalPublicKeysDTO;
    activityBuckets: Array<ActivityBucketDTO>;
    mosaics: Array<Mosaic>;
    importance: string;
    importanceHeight: string;
}
export declare function instanceOfAccountDTO(value: object): boolean;
export declare function AccountDTOFromJSON(json: any): AccountDTO;
export declare function AccountDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDTO;
export declare function AccountDTOToJSON(value?: AccountDTO | null): any;
