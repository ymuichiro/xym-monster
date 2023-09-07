import { exists } from '../runtime';
export function instanceOfNamespaceNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function NamespaceNetworkPropertiesDTOFromJSON(json) {
    return NamespaceNetworkPropertiesDTOFromJSONTyped(json, false);
}
export function NamespaceNetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maxNameSize': !exists(json, 'maxNameSize') ? undefined : json['maxNameSize'],
        'maxChildNamespaces': !exists(json, 'maxChildNamespaces') ? undefined : json['maxChildNamespaces'],
        'maxNamespaceDepth': !exists(json, 'maxNamespaceDepth') ? undefined : json['maxNamespaceDepth'],
        'minNamespaceDuration': !exists(json, 'minNamespaceDuration') ? undefined : json['minNamespaceDuration'],
        'maxNamespaceDuration': !exists(json, 'maxNamespaceDuration') ? undefined : json['maxNamespaceDuration'],
        'namespaceGracePeriodDuration': !exists(json, 'namespaceGracePeriodDuration') ? undefined : json['namespaceGracePeriodDuration'],
        'reservedRootNamespaceNames': !exists(json, 'reservedRootNamespaceNames') ? undefined : json['reservedRootNamespaceNames'],
        'namespaceRentalFeeSinkAddress': !exists(json, 'namespaceRentalFeeSinkAddress') ? undefined : json['namespaceRentalFeeSinkAddress'],
        'rootNamespaceRentalFeePerBlock': !exists(json, 'rootNamespaceRentalFeePerBlock') ? undefined : json['rootNamespaceRentalFeePerBlock'],
        'childNamespaceRentalFee': !exists(json, 'childNamespaceRentalFee') ? undefined : json['childNamespaceRentalFee'],
    };
}
export function NamespaceNetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maxNameSize': value.maxNameSize,
        'maxChildNamespaces': value.maxChildNamespaces,
        'maxNamespaceDepth': value.maxNamespaceDepth,
        'minNamespaceDuration': value.minNamespaceDuration,
        'maxNamespaceDuration': value.maxNamespaceDuration,
        'namespaceGracePeriodDuration': value.namespaceGracePeriodDuration,
        'reservedRootNamespaceNames': value.reservedRootNamespaceNames,
        'namespaceRentalFeeSinkAddress': value.namespaceRentalFeeSinkAddress,
        'rootNamespaceRentalFeePerBlock': value.rootNamespaceRentalFeePerBlock,
        'childNamespaceRentalFee': value.childNamespaceRentalFee,
    };
}
