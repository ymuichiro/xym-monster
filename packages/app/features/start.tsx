import { Button, H2, H3, Input, Label, Paragraph, ScrollView, SelectBase, SheetBase, XStack, YStack, Spinner } from '@my/ui';
import { ClipboardPaste } from '@tamagui/lucide-icons';
import EggAnimation from 'app/assets/jsons/egg-animation.json';
import { getActiveNode, getEnumKeyByEnumValue } from 'app/services/common';
import Cookies from 'js-cookie';
import Lottie from 'lottie-react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'solito/router';
import { getActivePublicKey, isAllowedSSS } from 'sss-module';
import {
  AccountService,
  CommonMonsters,
  EpicMonsters,
  LegendaryMonsters,
  MonsterRarity,
  MonsterService,
  Mosaic,
  NetworkType,
  RareMonsters,
  TransactionService,
  TransferTransaction,
  UncommonMonsters,
  filterXDayTransactions,
  getPreviousHoursUtcTimestamp,
  isMobileDevice,
  getTodaysJstTimestamp,
} from 'symbol';

import AlertDialogMonster from '../components/AlertDialog';

interface MosaicSelectProps {
  name: string;
  value: string;
  amount: number;
}

const Order = {
  Asc: 'asc',
  Desc: 'desc',
} as const;

/**
 * ガチャアプリの起動、メッセージ入力の画面
 */
export function Start(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSSSInstaled, setIsSSSInstaled] = useState<boolean>(true);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<string>('');
  const [publicKey, setPublicKey] = useState<string>('');
  const [ITEMS, setItems] = useState<MosaicSelectProps[]>([{ name: 'none', value: 'none', amount: 0 }]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSpinner, setIsSpinner] = useState<boolean>(false);

  const router = useRouter();
  const address = process.env.NEXT_PUBLIC_SYSTEM_ADDRESS as string;

  // ガチャの一日の制限回数
  const limit = 5;

  useEffect(() => {
    const doAsyncTask = async () => {
      // モバイルでなければSSSから公開鍵を取得する

      if (!isMobileDevice()) {
        if (isAllowedSSS()) {
          const pubKey = getActivePublicKey();
          setPublicKey(pubKey);
        } else {
          setIsSSSInstaled(false);
        }
      } else {
        const _pubKey = Cookies.get('publicKey');
        if (_pubKey != undefined) {
          setPublicKey(_pubKey);
        }
      }
    };
    // SSSは起動時に初期化されるので、1秒待ってから公開鍵を取得する
    setTimeout(() => {
      doAsyncTask();
    }, 1000);
  }, []);

  // ゲームスタートボタン押下時の処理
  const hundleGameStart = async () => {
    try {
      setIsSpinner(true);
      if (publicKey == '') {
        // 公開鍵が取得できなかった場合はアラートを表示する
        setIsOpenAlertDialog('Please input you public key.');
        setIsSpinner(false);
        return;
      }

      // モバイルの場合は公開鍵をCookieに保存する
      if (isMobileDevice()) {
        Cookies.set('publicKey', publicKey);
      }

      // モンスターのセレクトボックスの初期化
      setItems([{ name: 'none', value: 'none', amount: 0 }]);

      // 所有モザイクからモンスターを保有していればセレクトボックスに追加する
      const accountService = new AccountService(publicKey);
      const monsterService = new MonsterService(
        CommonMonsters,
        UncommonMonsters,
        RareMonsters,
        EpicMonsters,
        LegendaryMonsters
      );
      const node = await getActiveNode();

      const t = await TransactionService.searchConfirmedTransactions(node, {
        type: [16724],
        recipientAddress: address,
        signerPublicKey: publicKey,
        pageSize: 20,
        order: Order.Desc,
      });
      const todaysJstTimestamp = getTodaysJstTimestamp();
      console.log("todaysJstTimestamp");
      console.log(new Date(todaysJstTimestamp + 1615853185 * 1000));
      const txs = filterXDayTransactions(t.data, todaysJstTimestamp);
      if(txs.length != 0){
        const today = new Date(todaysJstTimestamp + 1615853185 * 1000);
        if (txs.length >= limit) {
          setErrorMessage(`ガチャの一日の上限回数${limit}回に達しました。次回：${formatDate(today)}`);
          setIsSpinner(false);
          return;
        }
      }

      accountService
        .getAccountInfo(node)
        .then((accountInfo) => {
          accountInfo.account.mosaics.forEach((mosaic) => {
            const monster = monsterService.getMonsterName(mosaic.id);
            if (monster != undefined) {
              setItems((prev) => [
                ...prev,
                {
                  name:
                    monster.name + ' : ' + getEnumKeyByEnumValue(MonsterRarity, monster.rarity) + ' : ' + mosaic.amount,
                  value: mosaic.id,
                  amount: Number(mosaic.amount),
                },
              ]);
            }
          });
        })
        .catch(() => {
          setIsOpenAlertDialog('Unable to your account information.');
          setIsOpen(false);
        });
        setIsSpinner(false);
      setIsOpen(!isOpen);
    } catch (error: any) {
      console.error(error.message)
      alert(`${error.message} \n リロードしてみてください。それでもおかしな場合は開発までご連絡をお願いします。`);
    }
  };

  const handlePastePubKey = async () => {
    setPublicKey(await navigator.clipboard.readText());
  };

  // セットした情報によりトランザクションを構築する
  const handleSend = async (
    message: string | undefined,
    mosaicId1: string | undefined,
    mosaicId2: string | undefined
  ) => {
    let mosaics: Mosaic[] = [];

    if (mosaicId1 && mosaicId2 && mosaicId1 == mosaicId2) {
      mosaics.push({ id: mosaicId1, amount: BigInt(2) });
    } else {
      if (mosaicId1) {
        mosaics.push({ id: mosaicId1, amount: BigInt(1) });
      }
      if (mosaicId2) {
        mosaics.push({ id: mosaicId2, amount: BigInt(1) });
      }
    }

    try {
      const node = await getActiveNode();
      const transferTransaction = new TransferTransaction(
        node,
        process.env.NEXT_PUBLIC_BACKEND as string,
        NetworkType.MAINNET,
        address!,
        undefined,
        undefined,
        publicKey,
        mosaics,
        message,
        false
      );
      await transferTransaction.build();
      const signed_payload = await transferTransaction.sign();

      // ゲットモンスターページへ遷移する、aLiceの場合はsigned_payloadにaLiceの値をセットする
      router.push({
        query: { signed_payload },
        pathname: '/get',
      });
    } catch (error) {
      // エラーハンドリング
      console.error(error.message)
      alert(`${error.message} \n リロードしてみてください。それでもおかしな場合は開発までご連絡をお願いします。`);
    }
    setIsOpen(false);
  };

  const handlePublicKeyChange = (event: any) => {
    setPublicKey(event.target.value);
  };

  const handleLinkClickToList = () => {
    const queryParams = { publicKey };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/list?${queryString}`);
  };

  const formatDate = (date: Date) => {
    const d = new Date(date);
    d.setHours(d.getHours() + 24);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    return month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }

  return (
    <YStack f={1} padding={'$4'} alignItems="center">
      <YStack f={1} maxWidth={600}>
        <AlertDialogMonster
          isOpen={!isSSSInstaled}
          hasAccept={true}
          hasCancel={false}
          title="Alert"
          description="SSS is not installed. Please install SSS."
          acceptText="OK"
          onAccept={() => setIsSSSInstaled(true)}
        />
        <AlertDialogMonster
          isOpen={isOpenAlertDialog !== ''}
          hasAccept={true}
          hasCancel={false}
          title="Alert"
          description={isOpenAlertDialog}
          acceptText="OK"
          onAccept={() => setIsOpenAlertDialog('')}
        />
        <H2
          style={{
            color: '#ACB6E5',
            background: '-webkit-linear-gradient(0deg, #ACB6E5, #86FDE8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            paddingRight: 20,
            letterSpacing: 1.1,
          }}
        >
          XYM Monster 😈
        </H2>
        <Paragraph>What you get depends on your luck!</Paragraph>

        <Paragraph theme="alt1" size="$3" marginTop="$3">
          XYM Monster is a game where you can get a random XYM Monster by inscribing today's events on the blockchain.
        </Paragraph>
        <Lottie source={EggAnimation} autoPlay loop style={{ height: 400 }} />
        <YStack rowGap={'$4'}>
          <XStack jc="center">
            <Paragraph>Input your publicKey.</Paragraph>
          </XStack>
          <XStack jc="center" space={'$3'}>
            <Input placeholder="PublicKey" value={publicKey} width={'80%'} onChange={handlePublicKeyChange} />
            {isMobileDevice() && (
              <XStack space={'$4'} ai={'center'}>
                <Button
                  onPress={() => {
                    window.location.href = 'alice://sign?type=request_pubkey';
                  }}
                >
                  aLice
                </Button>
                <Button icon={<ClipboardPaste />} onPress={handlePastePubKey} />
              </XStack>
            )}
          </XStack>
          <XStack jc="center">
            <YStack>
            <Button themeShallow fontWeight="bold" paddingLeft={'$8'} paddingRight={'$8'} onPress={hundleGameStart}>
              GAME START !! {isSpinner ? <Spinner size="large" color="$green10" margin="100"/> : <></>}
            </Button>
            </YStack>
          </XStack>
          <XStack jc="center">{<Paragraph color={'$red10Dark'}>{errorMessage}</Paragraph>}</XStack>
          <XStack jc="center" gap={10}>
            <Paragraph>
              <a href="/get">😈 Get Monster</a>
            </Paragraph>
            <Paragraph>
              <a href="#" onClick={handleLinkClickToList}>👾 Monsters List</a>
            </Paragraph>
          </XStack>
        </YStack>
        <SheetBase isOpen={isOpen} onOpenChange={setIsOpen}>
          <ReportModal
            items={ITEMS}
            onSubmit={(e) => {
              handleSend(e.text, e.mosaicId1, e.mosaicId2);
            }}
          />
        </SheetBase>
      </YStack>
    </YStack>
  );
}

interface ReportModalProps {
  onSubmit: (e: { text?: string; mosaicId1?: string; mosaicId2?: string }) => void;
  items: MosaicSelectProps[];
}

function ReportModal(props: ReportModalProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [mosaicId1, setMosaicId1] = useState<string>(props.items[0]?.value ?? 'none');
  const [mosaicId2, setMosaicId2] = useState<string>(props.items[1]?.value ?? 'none');

  const reportTitles: { name: string; value: string }[] = [
    { name: 'none', value: 'none' },
    { name: 'ジムツア報告', value: 'ジムツア報告' },
    { name: '今日頑張ったこと', value: '今日頑張ったこと' },
    { name: '今日の天気', value: '今日の天気' },
    { name: 'その他', value: 'その他' },
  ];

  const handleSubmit = () => {
    let text: { title: string; message: string } | undefined = { title: '', message: '' };
    if (message != '') {
      text.message = message;
      if (title != 'none') {
        text.title = title;
      }
    } else {
      text = undefined;
    }

    props.onSubmit({
      text: JSON.stringify(text),
      mosaicId1: mosaicId1 === 'none' ? undefined : mosaicId1,
      mosaicId2: mosaicId2 === 'none' ? undefined : mosaicId2,
    });
  };

  const handleOnChangeTitle = (text: string) => {
    setTitle(text);
  };

  const handleOnChangeSelect1 = (text: string) => {
    if (mosaicId2 === text) {
      setMosaicId2('none');
    }
    setMosaicId1(text);
  };

  const handleOnChangeSelect2 = (text: string) => {
    const amount = props.items.find((item) => item.value === text)?.amount;
    if (mosaicId1 === text && amount == 1) return;
    if (mosaicId1 === 'none') {
      setMosaicId1(text);
    } else {
      setMosaicId2(text);
    }
  };

  return (
    <ScrollView>
      <YStack space={'$3'} paddingBottom={'$8'} f={1} marginLeft={30} marginRight={30}>
        <H3>Write Report</H3>
        <Label>Report Title</Label>
        <SelectBase
          items={reportTitles}
          select={{ id: 'reportTitle', value: title, onValueChange: handleOnChangeTitle }}
        />
        <Label>Message</Label>
        <Input
          rows={8}
          placeholder="Maximum length is 300 characters."
          multiline
          value={message}
          onChangeText={setMessage}
          style={{ width: '100%' }}
          maxLength={300}
        />
        <Label>Token</Label>
        <YStack space={'$3'} f={1}>
          <SelectBase
            items={props.items}
            select={{ id: 'xymMon1', value: mosaicId1, onValueChange: handleOnChangeSelect1 }}
          />
          <SelectBase
            items={props.items}
            select={{ id: 'xymMon2', value: mosaicId2, onValueChange: handleOnChangeSelect2 }}
          />
        </YStack>
        <Button themeInverse onPress={handleSubmit} fontWeight={'bold'} marginTop={'$4'}>
          SUBMIT
        </Button>
      </YStack>
    </ScrollView>
  );
}
