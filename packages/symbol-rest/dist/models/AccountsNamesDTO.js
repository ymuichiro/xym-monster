import { AccountNamesDTOFromJSON, AccountNamesDTOToJSON, } from './AccountNamesDTO';
export function instanceOfAccountsNamesDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "accountNames" in value;
    return isInstance;
}
export function AccountsNamesDTOFromJSON(json) {
    return AccountsNamesDTOFromJSONTyped(json, false);
}
export function AccountsNamesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountNames': (json['accountNames'].map(AccountNamesDTOFromJSON)),
    };
}
export function AccountsNamesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountNames': (value.accountNames.map(AccountNamesDTOToJSON)),
    };
}
