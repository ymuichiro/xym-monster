import { ScrollView, SheetBase } from '@my/ui';
import { AnnounceResultSheet } from '@my/ui/src/components/AnnounceResultSheet';
import { Button } from '@tamagui/button';
import { YStack } from '@tamagui/stacks';
import CheckIcon from 'app/assets/icons/icon-check.png';
import { useEffect, useState } from 'react';
import { TransactionService } from 'symbol';

type Status = 'yet' | 'announce' | 'success' | 'failer';

interface PaymentActionAnnounceProps {
  payload: string;
}

// nodeUrlはBrowserStorageから取得する
const node = "https://mikun-testnet.tk:3001";

export function PaymentActionAnnounce(props: PaymentActionAnnounceProps): JSX.Element {
  const [isStatus, setIsStatus] = useState<Status>('yet');
  const [sendResult, setSentResult] = useState<{ title: string; image: string } | null>(null);

  useEffect(() => {
    // ここに アナウンス処理。完了したら setIsStatus('success') または setIsStatus('failer')
    try {
      // トランザクション送信処理
      TransactionService.announceTransaction(node, props.payload).then((result)=>{
        if (result.error) {
          // 失敗したら sheet modal を表示
          setIsStatus('failer');
          setSentResult({ title: 'Error', image: CheckIcon.src });
          console.error(result.error);
        } else {
          // 成功したら sheet modal を表示
          setIsStatus('announce');
          setSentResult({ title: 'Successfully', image: CheckIcon.src });
        }
      });
    } catch (err) {
      setSentResult(null);
    }
  }, []);

  const handleRetry = () => {
    // アナウンスリトライ
    TransactionService.announceTransaction(node, props.payload).then((result)=>{
      if (result.error) {
        // 失敗したら sheet modal を表示
        setIsStatus('failer');
        setSentResult({ title: 'Error', image: CheckIcon.src });
        console.error(result.error);
      } else {
        // 成功したら sheet modal を表示
        setIsStatus('announce');
        setSentResult({ title: 'Successfully', image: CheckIcon.src });
      }
    });
    // router.push('/'); これはホームに戻るときに使う
  };

  return (
    <YStack f={1} jc="center" ai="center">
      Signed transaction being sent.
      {isStatus === 'failer' && <Button onPress={handleRetry}>Retry</Button>}
      <SheetBase
        isOpen={Boolean(sendResult)}
        onOpenChange={() => {
          /* not close */
        }}
      >
        <ScrollView ai={'center'} showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
          {sendResult && <AnnounceResultSheet image={sendResult.image} title={sendResult.title} />}
        </ScrollView>
      </SheetBase>
    </YStack>
  );
}
