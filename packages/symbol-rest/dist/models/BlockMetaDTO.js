export function instanceOfBlockMetaDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "totalFee" in value;
    isInstance = isInstance && "generationHash" in value;
    isInstance = isInstance && "stateHashSubCacheMerkleRoots" in value;
    isInstance = isInstance && "totalTransactionsCount" in value;
    isInstance = isInstance && "transactionsCount" in value;
    isInstance = isInstance && "statementsCount" in value;
    return isInstance;
}
export function BlockMetaDTOFromJSON(json) {
    return BlockMetaDTOFromJSONTyped(json, false);
}
export function BlockMetaDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hash': json['hash'],
        'totalFee': json['totalFee'],
        'generationHash': json['generationHash'],
        'stateHashSubCacheMerkleRoots': json['stateHashSubCacheMerkleRoots'],
        'totalTransactionsCount': json['totalTransactionsCount'],
        'transactionsCount': json['transactionsCount'],
        'statementsCount': json['statementsCount'],
    };
}
export function BlockMetaDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hash': value.hash,
        'totalFee': value.totalFee,
        'generationHash': value.generationHash,
        'stateHashSubCacheMerkleRoots': value.stateHashSubCacheMerkleRoots,
        'totalTransactionsCount': value.totalTransactionsCount,
        'transactionsCount': value.transactionsCount,
        'statementsCount': value.statementsCount,
    };
}
