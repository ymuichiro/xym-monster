import { Button, Card, H1, H2, Paragraph, ScrollView, SheetBase, XStack, YStack, Spinner } from '@my/ui';
import { useState } from 'react';
import { TransactionApi } from 'symbol';
import { DateTimePicker } from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { getMonsterNameById } from 'symbol';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function shortenString(str: string): string {
  if (str.length < 8) {
    return str;
  }
  return str.slice(0, 4) + "...." + str.slice(-4);
}
function timestampToDateString(timestamp: string): string {
  const date = new Date((Number(timestamp) + 1615853185000));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

function hexToUtf8(hex: string): { title: string, message: string } {
  if (!hex) {
    return { title: "", message: "" };
  }

  if (hex.startsWith("00")) {
    hex = hex.slice(2);
  }

  var bytes = new Uint8Array(hex.length / 2);
  for (var i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  const str = new TextDecoder().decode(bytes);
  const json = JSON.parse(str);
  return { title: json.title, message: json.message };
}

const SendTransactionTable = ({ transactions }) => (
  <table style={{ width: '100%', tableLayout: 'fixed' }}>
    <thead>
      <tr>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>Timestamp</th>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>Recipient Address</th>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>Mosaics</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transactionData, index) => (
        <tr key={index}>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{timestampToDateString(transactionData.meta.timestamp)}</td>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{shortenString(transactionData.transaction.recipientAddress)}</td>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{getMonsterNameById(transactionData.transaction.mosaics[0]?.id)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const RecieveTransactionTable = ({ transactions }) => (
  <table style={{ width: '100%', tableLayout: 'fixed' }}>
    <thead>
      <tr>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '15%' }}>Timestamp</th>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '15%' }}>Signer Public Key</th>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '50%' }}>Message</th>
        <th style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '20%' }}>Mosaics</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transactionData, index) => (
        <tr key={index}>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{timestampToDateString(transactionData.meta.timestamp)}</td>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{shortenString(transactionData.transaction.signerPublicKey)}</td>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {(() => {
              const m = hexToUtf8(transactionData.transaction.message);
              return `${m.title}: ${m.message}`;
            })()}
          </td>
          <td style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{transactionData.transaction.mosaics.map(mosaic => `${getMonsterNameById(mosaic.id)}: ${mosaic.amount}`).join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export function Txs() {
  const [fromValue, onChangeFrom] = useState<Value>(new Date());
  const [toValue, onChangeTo] = useState<Value>(new Date());
  const [sendTxs, setSendTxs] = useState<TransactionApi[]>([]);
  const [recieveTxs, setRecieveTxs] = useState<TransactionApi[]>([]);

  const handleGetMonsters = async () => {
    const ft = fromValue ? new Date(fromValue.toString()) : null;
    const tt = toValue ? new Date(toValue.toString()) : null;
    const fromTimestamp = ft ? Math.floor(ft.getTime() / 1000) : null;
    const toTimestamp = tt ? Math.floor(tt.getTime() / 1000) : null;

    const response = await (await fetch(`/api/transactions/getTransactionsFromTimestamp?fromTimestamp=${fromTimestamp}&toTimestamp=${toTimestamp}`)).json();
    setSendTxs(response.sendTxs);
    console.log(response.recieveTxs);
    setRecieveTxs(response.recieveTxs);
  };
  return (
    <ScrollView
      f={1}
      padding={'$4'}
      alignItems="center"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <YStack gap={10}>
        <XStack jc="flex-end" gap={10}>
          <Paragraph>from</Paragraph>
          <DateTimePicker onChange={onChangeFrom} value={fromValue} />
          <Paragraph>to</Paragraph>
          <DateTimePicker onChange={onChangeTo} value={toValue} />
          <Button onPress={handleGetMonsters} >
            Click
          </Button>
        </XStack>
        <XStack gap={10}>
          <Paragraph>Recieve Transactions Count: {recieveTxs.length}</Paragraph>
          <Paragraph>Send Transactions Count: {sendTxs.length}</Paragraph>
        </XStack>
        <XStack gap={10}>
          <RecieveTransactionTable transactions={recieveTxs} />
        </XStack>
        <XStack gap={10}>
          <SendTransactionTable transactions={sendTxs} />
        </XStack>
      </YStack>
    </ScrollView>
  );
}