# symbol package

## REST APIからのデータ取得
```js
import SymbolApiService from 'symbol/src/services/SymbolApiService';
import { TransactionGroup } from 'symbol/src/models/SearchCriteria';
import { TransactionType } from 'symbol/src/models/TransactionType';
import { Account } from 'symbol/src/models/Account';

const symbolApiService = new SymbolApiService("https://mikun-testnet.tk:3001");
const accountService = symbolApiService.createAccountService();
const transactionSerice = symbolApiService.createTransactionService();

// トランザクションハッシュを指定
transactionSerice.getTransactionInfo(TransactionGroup.Confirmed, "1B5DA615114774D75105258D8CFE50EB58B48519A40BA4A377679471ABECC993")
    .then((result) => console.log(result));

// 検索条件を指定
transactionSerice.searchTransactions(TransactionGroup.Confirmed, {address: id, type: TransactionType.TransferTransaction})
    .then((result) => console.log(result));

// アドレス指定
const accountInfo = await accountService.getAccountInfo("TAUYF774MZWLBEUI7S2LR6BA5CYLL53QSMDVV3Y");
```
※今のところ対応しているトランザクションは以下
- TransferTranasction

それ以外はundefindを返す

## トランザクション構築
```js
import { requestSign, setTransactionByPayload } from 'sss-module';
import SymbolApiService from 'symbol/src/services/SymbolApiService';
import { utf8ToHex } from 'symbol/src/utils/converter';
import { isMobileDevice } from 'symbol/src/utils/isMobileDevice';
import TransactionBuilderService from 'symbol/src/services/TransactionBuilderService';
import { NetworkType } from 'symbol/src/models/NetworkType';
import Mosaic from 'symbol/src/models/Mosaic';
import ITransferTransaction from 'symbol/src/models/transactions/ITransferTransaction';

const mosaics: Mosaic[] = [{
    id: mosaicId,
    amount: BigInt(amount)
}];

const transferTransaction: ITransferTransaction = {
    networkType: NetworkType.TESTNET,
    mosaics,
    recipientAddress: address,
    message: message
}
const payload = await TransactionBuilderService.buildTransferTransaction(transferTransaction);
await getSignedPayload(payload);

async function getSignedPayload(payload: string) {
    if (!isMobileDevice()) {
      setTransactionByPayload(payload);
      const signed = await requestSign();
      const symbolApiService = new SymbolApiService("https://mikun-testnet.tk:3001");
      const transactionSerice = symbolApiService.createTransactionService();
      const result = await transactionSerice.announce(signed.payload);
      console.log(result)
    } else {
        const callback = "https://callback.com?param=1...";
        window.location.href = `alice://sign?type=request_sign_transaction&data=${payload}&callback=${utf8ToHex(callback)}`;
    }
}
```

aLiceは署名済みペイロードを返すのでコールバック先でアナウンスするなどの対応が必要です
```js
transactionSerice.announce(signed_payload).then((result) => {
    alert('送信しました');
});
```

※今のところ対応しているトランザクション構築が可能なのは以下
- TransferTranasction

今後、バックエンドに追加して対応していきます