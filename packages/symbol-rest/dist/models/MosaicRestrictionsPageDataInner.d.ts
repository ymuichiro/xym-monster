import type { MosaicGlobalRestrictionEntryWrapperDTO } from './MosaicGlobalRestrictionEntryWrapperDTO';
export interface MosaicRestrictionsPageDataInner {
    id: string;
    mosaicRestrictionEntry: MosaicGlobalRestrictionEntryWrapperDTO;
}
export declare function instanceOfMosaicRestrictionsPageDataInner(value: object): boolean;
export declare function MosaicRestrictionsPageDataInnerFromJSON(json: any): MosaicRestrictionsPageDataInner;
export declare function MosaicRestrictionsPageDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicRestrictionsPageDataInner;
export declare function MosaicRestrictionsPageDataInnerToJSON(value?: MosaicRestrictionsPageDataInner | null): any;
