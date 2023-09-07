import { BlockInfoDTOBlockFromJSON, BlockInfoDTOBlockToJSON, } from './BlockInfoDTOBlock';
import { BlockMetaDTOFromJSON, BlockMetaDTOToJSON, } from './BlockMetaDTO';
export function instanceOfBlockInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "block" in value;
    return isInstance;
}
export function BlockInfoDTOFromJSON(json) {
    return BlockInfoDTOFromJSONTyped(json, false);
}
export function BlockInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'meta': BlockMetaDTOFromJSON(json['meta']),
        'block': BlockInfoDTOBlockFromJSON(json['block']),
    };
}
export function BlockInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'meta': BlockMetaDTOToJSON(value.meta),
        'block': BlockInfoDTOBlockToJSON(value.block),
    };
}
