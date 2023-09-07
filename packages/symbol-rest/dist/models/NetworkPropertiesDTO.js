import { exists } from '../runtime';
import { NodeIdentityEqualityStrategyFromJSON, NodeIdentityEqualityStrategyToJSON, } from './NodeIdentityEqualityStrategy';
export function instanceOfNetworkPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function NetworkPropertiesDTOFromJSON(json) {
    return NetworkPropertiesDTOFromJSONTyped(json, false);
}
export function NetworkPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'nodeEqualityStrategy': !exists(json, 'nodeEqualityStrategy') ? undefined : NodeIdentityEqualityStrategyFromJSON(json['nodeEqualityStrategy']),
        'nemesisSignerPublicKey': !exists(json, 'nemesisSignerPublicKey') ? undefined : json['nemesisSignerPublicKey'],
        'generationHashSeed': !exists(json, 'generationHashSeed') ? undefined : json['generationHashSeed'],
        'epochAdjustment': !exists(json, 'epochAdjustment') ? undefined : json['epochAdjustment'],
    };
}
export function NetworkPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identifier': value.identifier,
        'nodeEqualityStrategy': NodeIdentityEqualityStrategyToJSON(value.nodeEqualityStrategy),
        'nemesisSignerPublicKey': value.nemesisSignerPublicKey,
        'generationHashSeed': value.generationHashSeed,
        'epochAdjustment': value.epochAdjustment,
    };
}
