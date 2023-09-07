export function instanceOfImportanceBlockDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "votingEligibleAccountsCount" in value;
    isInstance = isInstance && "harvestingEligibleAccountsCount" in value;
    isInstance = isInstance && "totalVotingBalance" in value;
    isInstance = isInstance && "previousImportanceBlockHash" in value;
    return isInstance;
}
export function ImportanceBlockDTOAllOfFromJSON(json) {
    return ImportanceBlockDTOAllOfFromJSONTyped(json, false);
}
export function ImportanceBlockDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'votingEligibleAccountsCount': json['votingEligibleAccountsCount'],
        'harvestingEligibleAccountsCount': json['harvestingEligibleAccountsCount'],
        'totalVotingBalance': json['totalVotingBalance'],
        'previousImportanceBlockHash': json['previousImportanceBlockHash'],
    };
}
export function ImportanceBlockDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'votingEligibleAccountsCount': value.votingEligibleAccountsCount,
        'harvestingEligibleAccountsCount': value.harvestingEligibleAccountsCount,
        'totalVotingBalance': value.totalVotingBalance,
        'previousImportanceBlockHash': value.previousImportanceBlockHash,
    };
}
