## 機能メモ

- 新規トランザクション通知機能

aLice や SSS と連携する仕様の為、専用の申し込みページからアドレスを指定して購読申し込みをする形式とする。配信は web push。
購読申し込み時に、アドレス、任意の名前を指定し、申し込みを行うと通知がされる。配信期間は 1 年間。1 年経過前に購読終了通知を送る。

- アドレス帳

ブラウザストレージに対してアドレス帳データを格納する。
キャッシュクリアにより消えてしまう為、エクスポート機能は付与する。
プレミアム機能として GitHub OAuth をしたユーザーはサーバー側に保持するものとする。

## メモ

### 各種エラー

1. `<Card elevate bordered animation={'bouncy'} hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>` とした際に以下のようなエラーが発生

解決方法見出せず、 animation={"bouncy"} は削除とした。 tamagui バージョンアップ後に再トライ予定。

```
Warning: Cannot update a component (`H2`) while rendering a different component (`ForwardRef(Card)`). To locate the bad setState() call inside `ForwardRef(Card)`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
```
