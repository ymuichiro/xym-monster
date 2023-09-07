import { AccountDTOFromJSON, AccountDTOToJSON, } from './AccountDTO';
export function instanceOfAccountInfoDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "account" in value;
    return isInstance;
}
export function AccountInfoDTOFromJSON(json) {
    return AccountInfoDTOFromJSONTyped(json, false);
}
export function AccountInfoDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'account': AccountDTOFromJSON(json['account']),
    };
}
export function AccountInfoDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'account': AccountDTOToJSON(value.account),
    };
}
