import { DialogBase, Input, Paragraph, Spinner, View, XStack, YStack } from '@my/ui';
import { Button } from '@tamagui/button';
import { ClipboardPaste, Copy } from '@tamagui/lucide-icons';
import CrackerAnimation from 'app/assets/jsons/cracker-animation.json';
import EggAnimation from 'app/assets/jsons/egg-2-animation.json';
import LoadingAnimalAnimation from 'app/assets/jsons/loading-animal-animation.json';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'solito/router';
import { MonsterRarity, TransactionService } from 'symbol';

interface MonsterProps {
  node: string;
  backendUrl: string;
  publicSystemAddress: string;
  payload: string;
}

export function Monster(props: MonsterProps) {
  const [hash, setHash] = useState<string>('');
  const [payload, setPayload] = useState<string>('');
  const [isGettingMonster , setIsGettingMonster] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [animationState, setAnimationState] = useState<'wait' | 'present' | 'get' | 'fail' | 'announce'>('get');
  const [isGetTreasureLoading, setIsGetTreasureLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    try {
      // クエリに signed_payload がなければ present にしてHashの手動入力待機
      if (props.payload === undefined) {
        setAnimationState('present');
        return;
      }
      // クエリが aLice なら announce にしてsigned payloadの手動入力待機
      if (props.payload === 'aLice') {
        setAnimationState('announce');
        return;
      }
      // クエリにsigned payloadが存在する場合はトランザクション送信処理
      TransactionService.announceTransaction(props.node, props.backendUrl, props.payload).then((result) => {
        if (result.error) {
          // 失敗したら sheet modal を表示
          console.error(result.error);
        } else {
          // 成功したら Hashをセットし検証用ボタン（Get）を表示
          setHash(result.hash);
          setAnimationState('present');
        }
      });
      setHash('*'.repeat(64));
      setAnimationState('wait');
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handlePaste = () => {
    navigator.clipboard.readText();
  };

  const handleGetTreasure = async () => {
    setIsGettingMonster(true);
    setIsGetTreasureLoading(true);
    const res = await TransactionService.getTreasure(props.node, props.backendUrl, hash);
    if (res.message.error) {
      console.error(res.message.error);
      setErrorMessage(res.message.error)
      setAnimationState('fail');
      setIsGettingMonster(false);
      setIsGetTreasureLoading(false);
    } else {
      console.log(res);
      setResultMessage(`You got a "${res.message.monsterName}"! ${res.message.mosaicId}: ${getEnumKeyByEnumValue(MonsterRarity, res.message.rarity)}"`);
      setAnimationState('get');
      setIsGettingMonster(false);
      setIsGetTreasureLoading(false);
    }
  };

  const handleAnnounce = () => {
    TransactionService.announceTransaction(props.node, props.backendUrl, payload).then((result) => {
      if (result.error) {
        // 失敗したら sheet modal を表示
        console.error(result.error);
      } else {
        // 成功したら Hashをセットし検証用ボタン（Get）を表示
        setHash(result.hash);
        setAnimationState('present');
      }
    });
    setHash('*'.repeat(64));
    setAnimationState('wait');
  }

  if (animationState === 'wait') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} key={animationState + Math.random().toString()}>
        <View enterStyle={{ scale: 1.5, y: -10, opacity: 0 }} animation="bouncy">
          <Lottie source={LoadingAnimalAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
        </View>

        <Paragraph>Signed transaction being sent.</Paragraph>
        <View height={150} />
      </YStack>
    );
  }

  if (animationState === 'present') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} padding={'$4'}>
        <View enterStyle={{ x: -300, opacity: 0 }} animation="bouncy">
          <Lottie source={EggAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
        </View>
        {isGetTreasureLoading ? <Spinner size="large" /> : <Paragraph>Success! Would you like to get eggs?</Paragraph>}
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
          <XStack space={'$4'} ai={'center'}>
            <Input f={1} placeholder="Transaction Hash" value={hash} onChangeText={setHash} />
            <Button icon={<Copy />} onPress={()=>handleCopy(hash)} />
            <Button icon={<ClipboardPaste />} onPress={handlePaste} />
          </XStack>
          <Button themeInverse onPress={handleGetTreasure} disabled={isGettingMonster} opacity={isGettingMonster == true ? 0.5 : 1}>
            YEAH!
          </Button>
        </YStack>
        <View height={150} />
      </YStack>
    );
  }

  if (animationState === 'announce') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} padding={'$4'}>
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
          <XStack space={'$4'} ai={'center'}>
          <YStack space={'$4'} width={'100%'}>
            <Paragraph>Input SignedPayload !!</Paragraph>
            <Input f={1} placeholder="Signed Payload" value={payload} onChangeText={setPayload} />
            <Button icon={<ClipboardPaste />} onPress={handlePaste} />
          </YStack>
          </XStack>
          <Button themeInverse onPress={handleAnnounce}>
            Send
          </Button>
        </YStack>
        <View height={150} />
      </YStack>
    );
  }

  if (animationState === 'get') {
    return (
      <YStack f={1} jc="flex-start" space={'$4'} padding={'$4'} key={animationState + Math.random().toString()}>
        <Lottie
          speed={0.2}
          source={CrackerAnimation}
          autoPlay
          style={{ height: 500, width: 'auto', margin: '0 auto' }}
        />
        <DialogBase
          isOpen={true}
          title="Congratulations!"
          description={resultMessage}
          onOpenChange={() => {}}
          contentStyle={{ width: '100%', maxWidth: 600, minHeight: 300 }}
        >
          <YStack space={'$4'} f={1} jc="center" ai="center">
            <Lottie source={EggAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
            <Button onPress={()=>{
              router.push({
                pathname: '/',
              });
            }}>START</Button>
          </YStack>
        </DialogBase>
      </YStack>
    );
  }

  if (animationState === 'fail') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} key={animationState + Math.random().toString()}>
        <View>
          <Lottie
            source={EggAnimation}
            style={{ height: 300, width: 300, margin: '0 auto', transform: 'rotate(120deg)' }}
          />
        </View>
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
        {<Paragraph color={'$red10Dark'}>{errorMessage}</Paragraph>}
          <Button themeInverse onPress={handleGetTreasure}>
            Retry...
          </Button>
        </YStack>
        <View height={150} />
      </YStack>
    );
  }
}

function getEnumKeyByEnumValue(enumType: any, enumValue: any): string | undefined {
  const keys = Object.keys(enumType).filter((key) => enumType[key] === enumValue);
  return keys.length > 0 ? keys[0] : undefined;
}