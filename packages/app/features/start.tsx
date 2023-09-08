import {
  AlertDialog,
  Button,
  H2,
  H3,
  Input,
  Label,
  Paragraph,
  ScrollView,
  SelectBase,
  SheetBase,
  View,
  XStack,
  YStack,
} from '@my/ui';
import EggAnimation from 'app/assets/jsons/egg-animation.json';
import { getEnumKeyByEnumValue } from 'app/services/common';
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
  TransferTransaction,
  UncommonMonsters,
  isMobileDevice
} from 'symbol';

interface StartProps {
  node: string;
  backendUrl: string;
  publicSystemAddress: string;
}

interface MosaicSelectProps {
  name: string;
  value: string;
}

/**
 * ガチャアプリの起動、メッセージ入力の画面
 */
export function Start(props: StartProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSSSInstaled, setIsSSSInstaled] = useState<boolean>(true);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>('');
  const [ITEMS, setItems] = useState<MosaicSelectProps[]>([{ name: 'none', value: 'none' }]);
  const router = useRouter();
  const address = props.publicSystemAddress;

  useEffect(() => {
    const doAsyncTask = async () => {
      // モバイルでなければSSSから公開鍵を取得する

      if(!isMobileDevice()) {
        if (isAllowedSSS()){
          const pubKey = getActivePublicKey();
          setPublicKey(pubKey);
        } else {
          setIsSSSInstaled(false);
        }
      }
    };
    // SSSは起動時に初期化されるので、1秒待ってから公開鍵を取得する
    setTimeout(()=>{
      doAsyncTask()
    }, 1000);
  }, []);

  // ゲームスタートボタン押下時の処理
  const hundleGameStart = async () => {
    if(publicKey == "") {
      // 公開鍵が取得できなかった場合はアラートを表示する
      setIsOpenAlertDialog("Please input you public key.");
      return;
    }
    
    // 所有モザイクからモンスターを保有していればセレクトボックスに追加する
    const accountService = new AccountService(publicKey);
    const monsterService = new MonsterService(CommonMonsters, UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters);
    accountService.getAccountInfo(props.node).then((accountInfo) => {
      accountInfo.account.mosaics.forEach((mosaic) => {
        const monster = monsterService.getMonsterName(mosaic.id);
        if(monster != undefined) {
          setItems((prev) => [...prev, { name: monster.name + " : " + getEnumKeyByEnumValue(MonsterRarity, monster.rarity), value: mosaic.id }]);
        }
        setIsOpen(!isOpen);
      })
    }).catch(()=>{
      setIsOpenAlertDialog("Unable to your account information.")
    })
  };

  // セットした情報によりトランザクションを構築する
  const handleSend = async (message: string | undefined, mosaicId1: string | undefined, mosaicId2: string | undefined) => {
    let mosaics: Mosaic[] = [];

    if(mosaicId1 && mosaicId2 && mosaicId1 == mosaicId2) {
      mosaics.push({ id: mosaicId1, amount: BigInt(2)});
    } else {
      if(mosaicId1){
        mosaics.push({ id: mosaicId1, amount: BigInt(1)});
      }
      if(mosaicId2){
        mosaics.push({ id: mosaicId2, amount: BigInt(1) });
      }
    }

    const transferTransaction = new TransferTransaction(
      props.node,
      props.backendUrl,
      NetworkType.TESTNET,
      address!,
      undefined,
      undefined,
      mosaics,
      message,
      false,
    );

    try {
      await transferTransaction.build();
      const signed_payload = await transferTransaction.sign();

      // ゲットモンスターページへ遷移する、aLiceの場合はsigned_payloadにaLiceの値をセットする
      router.push({
        query: { signed_payload },
        pathname: '/get',
      });
    } catch (error) {
      // エラーハンドリング
      console.error('エラーが発生しました:', error);
    }
    setIsOpen(false);
  };

  const handlePublicKeyChange = (event: any) => {
    setPublicKey(event.target.value);
  };

  return (
    <YStack f={1} padding={"$4"}>
      <AlertDialogMonster 
        isOpen={!isSSSInstaled} 
        hasAccept={true} 
        hasCancel={false} 
        title='Alert' 
        description='SSS is not instaled. Please install SSS.' 
        acceptText='OK'
        onAccept={()=>setIsSSSInstaled(true)}/>
      <AlertDialogMonster 
        isOpen={isOpenAlertDialog !== ""} 
        hasAccept={true} 
        hasCancel={false} 
        title='Alert' 
        description={isOpenAlertDialog} 
        acceptText='OK'
        onAccept={()=>setIsOpenAlertDialog("")}/>
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
      <YStack rowGap={"$4"}>
        <XStack jc="center">
          <Paragraph>Input your publicKey.</Paragraph>
        </XStack>
        <XStack jc="center" space={'$3'}>
          <Input placeholder="PublicKey" value={publicKey} width={'80%'} onChange={handlePublicKeyChange}/>
          {isMobileDevice() && <Button onPress={()=>{window.location.href = "alice://sign?type=request_pubkey";}}>aLice</Button>}
        </XStack>
        <XStack jc="center">
          <Button
            themeShallow
            fontWeight="bold"
            paddingLeft={'$8'}
            paddingRight={'$8'}
            onPress={hundleGameStart}
          >
            GAME START !!
          </Button>
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
  );
}


interface ReportModalProps {
  onSubmit: (e: { text?: string; mosaicId1?: string;  mosaicId2?: string }) => void;
  items: MosaicSelectProps[];
}

function ReportModal(props: ReportModalProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [mosaicId1, setMosaicId1] = useState<string>(props.items[0]?.value ?? 'none');
  const [mosaicId2, setMosaicId2] = useState<string>(props.items[0]?.value ?? 'none');

  const handleSubmit = () => {
    let text: string | undefined = "";
    if(title != "") {
      text += `${title}\n----------\n`;
    }
    if(message != "") {
      text += `【報告内容】${message}`;
    }
    text = text == "" ? undefined : text;
    props.onSubmit({ text, mosaicId1: mosaicId1 === 'none' ? undefined : mosaicId1, mosaicId2: mosaicId2 === 'none' ? undefined : mosaicId2 });
  };

  return (
    <ScrollView>
      <YStack space={'$3'} paddingBottom={'$8'} f={1} marginLeft={30} marginRight={30}>
        <H3>Write Report</H3>
        <View>
          <Label>Report Title</Label>
          <Input value={title} onChangeText={setTitle} style={{ width: '100%' }} />
        </View>
        <View>
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
        </View>
        <View>
          <Label>Token</Label>
          <YStack space={'$3'} f={1}>
          {/* <select value={mosaicId1} onChange={(e) => setMosaicId1(e.target.value)}>
            {props.items.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <select value={mosaicId2} onChange={(e) => setMosaicId2(e.target.value)}>
            {props.items.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select> */}
            <SelectBase items={props.items} select={{ id: 'xymMon', value: mosaicId1, onValueChange: setMosaicId1 }}/>
            <SelectBase items={props.items} select={{ id: 'xymMon', value: mosaicId2, onValueChange: setMosaicId2 }} />
          </YStack>
        </View>
        <Button themeInverse onPress={handleSubmit} fontWeight={'bold'} marginTop={'$4'}>
          SUBMIT
        </Button>
      </YStack>
    </ScrollView>
  );
}

interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  onOpenChange?: () => void;
  hasAccept?: boolean;
  hasCancel?: boolean;
  acceptText?: string;
  cancelText?: string;
  onAccept?: () => void;
  onCancel?: () => void;
}
export function AlertDialogMonster(alertDialogProps: AlertDialogProps) {
  return (
    <AlertDialog native open={alertDialogProps.isOpen} onOpenChange={alertDialogProps.onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>{alertDialogProps.title}</AlertDialog.Title>
            <AlertDialog.Description>
              {alertDialogProps.description}
            </AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              {alertDialogProps.hasCancel && <AlertDialog.Cancel asChild>
                <Button onPress={alertDialogProps.onCancel}>{alertDialogProps.cancelText}</Button>
              </AlertDialog.Cancel>}
              {alertDialogProps.hasAccept && <AlertDialog.Action asChild>
                <Button theme="active" onPress={alertDialogProps.onAccept}>{alertDialogProps.acceptText}</Button>
              </AlertDialog.Action>}
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}