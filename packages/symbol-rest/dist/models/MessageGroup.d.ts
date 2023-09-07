import type { BmTreeSignature } from './BmTreeSignature';
import type { StageEnum } from './StageEnum';
export interface MessageGroup {
    stage: StageEnum;
    height: string;
    hashes: Array<string>;
    signatures: Array<BmTreeSignature>;
}
export declare function instanceOfMessageGroup(value: object): boolean;
export declare function MessageGroupFromJSON(json: any): MessageGroup;
export declare function MessageGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageGroup;
export declare function MessageGroupToJSON(value?: MessageGroup | null): any;
