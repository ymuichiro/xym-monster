export function instanceOfStorageInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "numBlocks" in value;
    isInstance = isInstance && "numTransactions" in value;
    isInstance = isInstance && "numAccounts" in value;
    return isInstance;
}
export function StorageInfoDTOFromJSON(json) {
    return StorageInfoDTOFromJSONTyped(json, false);
}
export function StorageInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numBlocks': json['numBlocks'],
        'numTransactions': json['numTransactions'],
        'numAccounts': json['numAccounts'],
    };
}
export function StorageInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numBlocks': value.numBlocks,
        'numTransactions': value.numTransactions,
        'numAccounts': value.numAccounts,
    };
}
