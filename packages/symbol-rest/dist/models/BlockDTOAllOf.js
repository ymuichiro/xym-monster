export function instanceOfBlockDTOAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "proofGamma" in value;
    isInstance = isInstance && "proofVerificationHash" in value;
    isInstance = isInstance && "proofScalar" in value;
    isInstance = isInstance && "previousBlockHash" in value;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "receiptsHash" in value;
    isInstance = isInstance && "stateHash" in value;
    isInstance = isInstance && "beneficiaryAddress" in value;
    isInstance = isInstance && "feeMultiplier" in value;
    return isInstance;
}
export function BlockDTOAllOfFromJSON(json) {
    return BlockDTOAllOfFromJSONTyped(json, false);
}
export function BlockDTOAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'height': json['height'],
        'timestamp': json['timestamp'],
        'difficulty': json['difficulty'],
        'proofGamma': json['proofGamma'],
        'proofVerificationHash': json['proofVerificationHash'],
        'proofScalar': json['proofScalar'],
        'previousBlockHash': json['previousBlockHash'],
        'transactionsHash': json['transactionsHash'],
        'receiptsHash': json['receiptsHash'],
        'stateHash': json['stateHash'],
        'beneficiaryAddress': json['beneficiaryAddress'],
        'feeMultiplier': json['feeMultiplier'],
    };
}
export function BlockDTOAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'height': value.height,
        'timestamp': value.timestamp,
        'difficulty': value.difficulty,
        'proofGamma': value.proofGamma,
        'proofVerificationHash': value.proofVerificationHash,
        'proofScalar': value.proofScalar,
        'previousBlockHash': value.previousBlockHash,
        'transactionsHash': value.transactionsHash,
        'receiptsHash': value.receiptsHash,
        'stateHash': value.stateHash,
        'beneficiaryAddress': value.beneficiaryAddress,
        'feeMultiplier': value.feeMultiplier,
    };
}
