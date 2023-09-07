import { YStack } from '@tamagui/stacks';
import { useEffect } from 'react';
import { useRouter } from 'solito/router';
import { TransferTransaction, NetworkType } from 'symbol';

interface PaymentActionWaitProps {
  address: string;
  mosaics: { id: string; amount: BigInt }[];
  message: string;
  isEncrypt: boolean;
  path: string;
}

export function PaymentActionWait(props: PaymentActionWaitProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const doAsyncTask = async () => {
      // NetworkTypeはどこかに保存しているものを使う
      const transferTransaction = new TransferTransaction(
        NetworkType.TESTNET,
        props.address,
        undefined,
        undefined,
        props.mosaics,
        props.message,
        props.isEncrypt,
      );

      try {
        await transferTransaction.build();
        const signed_payload = await transferTransaction.sign();

        // aLiceだとundefinedを返すのでSSSならannounceへリダイレクトする
        if (signed_payload !== undefined) {
          router.push({
            query: { signed_payload },
            pathname: props.path,
          });
        }
      } catch (error) {
        // エラーハンドリング
        console.error('エラーが発生しました:', error);
      }
    };
    doAsyncTask();
  }, [props.address, props.mosaics, props.message, props.isEncrypt]);

  return (
    <YStack f={1} jc="center" ai="center">
      Please close this page.
    </YStack>
  );
}
