import { exists } from '../runtime';
import { AliasDTOFromJSON, AliasDTOToJSON, } from './AliasDTO';
import { NamespaceRegistrationTypeEnumFromJSON, NamespaceRegistrationTypeEnumToJSON, } from './NamespaceRegistrationTypeEnum';
export function instanceOfNamespaceDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "depth" in value;
    isInstance = isInstance && "level0" in value;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "parentId" in value;
    isInstance = isInstance && "ownerAddress" in value;
    isInstance = isInstance && "startHeight" in value;
    isInstance = isInstance && "endHeight" in value;
    return isInstance;
}
export function NamespaceDTOFromJSON(json) {
    return NamespaceDTOFromJSONTyped(json, false);
}
export function NamespaceDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'depth': json['depth'],
        'level0': json['level0'],
        'level1': !exists(json, 'level1') ? undefined : json['level1'],
        'level2': !exists(json, 'level2') ? undefined : json['level2'],
        'alias': AliasDTOFromJSON(json['alias']),
        'parentId': json['parentId'],
        'ownerAddress': json['ownerAddress'],
        'startHeight': json['startHeight'],
        'endHeight': json['endHeight'],
    };
}
export function NamespaceDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'depth': value.depth,
        'level0': value.level0,
        'level1': value.level1,
        'level2': value.level2,
        'alias': AliasDTOToJSON(value.alias),
        'parentId': value.parentId,
        'ownerAddress': value.ownerAddress,
        'startHeight': value.startHeight,
        'endHeight': value.endHeight,
    };
}
