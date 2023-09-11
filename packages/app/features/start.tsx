import {
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
  TransferTransaction,
  UncommonMonsters,
  isMobileDevice
} from 'symbol';

import AlertDialogMonster from '../components/AlertDialog';


interface MosaicSelectProps {
  name: string;
  value: string;
}

/**
 * ガチャアプリの起動、メッセージ入力の画面
 */
export function Start(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSSSInstaled, setIsSSSInstaled] = useState<boolean>(true);
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>('');
  const [ITEMS, setItems] = useState<MosaicSelectProps[]>([{ name: 'none', value: 'none' }]);
  const router = useRouter();
  const address = process.env.NEXT_PUBLIC_SYSTEM_ADDRESS as string;

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
      } else {
        const _pubKey = Cookies.get('publicKey')
        if(_pubKey != undefined) {
          setPublicKey(_pubKey);
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

    // モバイルの場合は公開鍵をCookieに保存する
    if(isMobileDevice()) {
      Cookies.set('publicKey', publicKey);
    }
    
    // モンスターのセレクトボックスの初期化
    setItems([{ name: 'none', value: 'none' }]);
    
    // 所有モザイクからモンスターを保有していればセレクトボックスに追加する
    const accountService = new AccountService(publicKey);
    const monsterService = new MonsterService(CommonMonsters, UncommonMonsters, RareMonsters, EpicMonsters, LegendaryMonsters);
    const node = await getActiveNode();
    accountService.getAccountInfo(node).then((accountInfo) => {
      accountInfo.account.mosaics.forEach((mosaic) => {
        const monster = monsterService.getMonsterName(mosaic.id);
        if(monster != undefined) {
          setItems((prev) => [...prev, { name: monster.name + " : " + getEnumKeyByEnumValue(MonsterRarity, monster.rarity) + " : " + mosaic.amount, value: mosaic.id }]);
        }
      })
    }).catch(()=>{
      setIsOpenAlertDialog("Unable to your account information.")
    })
    setIsOpen(!isOpen);
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

    const node = await getActiveNode();
    const transferTransaction = new TransferTransaction(
      node,
      process.env.NEXT_PUBLIC_BACKEND as string,
      NetworkType.TESTNET,
      address!,
      undefined,
      undefined,
      publicKey,
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
        description='SSS is not installed. Please install SSS.' 
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
  const [mosaicId2, setMosaicId2] = useState<string>(props.items[1]?.value ?? 'none');

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
