import { DialogBase, Input, Paragraph, Spinner, View, XStack, YStack } from '@my/ui';
import { Button } from '@tamagui/button';
import { ClipboardPaste, Copy } from '@tamagui/lucide-icons';
import CrackerAnimation from 'app/assets/jsons/cracker-animation.json';
import EggAnimation from 'app/assets/jsons/egg-2-animation.json';
import LoadingAnimalAnimation from 'app/assets/jsons/loading-animal-animation.json';
import { getActiveNode } from 'app/services/common';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'solito/router';
import { TransactionService } from 'symbol';

interface MonsterProps {
  payload: string;
}

export function Monster(props: MonsterProps) {
  const [hash, setHash] = useState<string>('');
  const [payload, setPayload] = useState<string>('');
  const [isGettingMonster , setIsGettingMonster] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [animationState, setAnimationState] = useState<'wait' | 'present' | 'get' | 'fail' | 'announce'>('get');
  const [errorState, setErrorState] = useState<'first' | 'second'>();
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
      announce(props.payload);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const handlePasteHash = async () => {
    setHash(await navigator.clipboard.readText());
  };

  const handlePastePayload = async () => {
    setPayload(await navigator.clipboard.readText());
  };

  const handleGetTreasure = async () => {
    setIsGettingMonster(true);
    setIsGetTreasureLoading(true);
    const node = await getActiveNode();
    console.log(node);
    const treasureData = await TransactionService.getTreasure(node, (process.env.NEXT_PUBLIC_BACKEND as string), hash);
    if ('error' in treasureData) {
      console.error(treasureData.error);
      setErrorState('second');
      setErrorMessage(treasureData.error as string)
      setAnimationState('fail');
      setIsGettingMonster(false);
      setIsGetTreasureLoading(false);
    } else {
      const result: { payload: string, hash: string } | { error: any } = await TransactionService.announceTransaction(node, (process.env.NEXT_PUBLIC_BACKEND as string), treasureData.payload);
      if ('error' in result) {
        console.error(result.error);
        setErrorState('second');
        setErrorMessage(result.error)
        setAnimationState('fail');
        setIsGettingMonster(false);
        setIsGetTreasureLoading(false);
      } else {
        console.log(result);
        setResultMessage(`You got a "${treasureData.monsterName}"! ${treasureData.mosaicId}: ${treasureData.rarity}"`);
        setAnimationState('get');
        setIsGettingMonster(false);
        setIsGetTreasureLoading(false);
      }
    }
  };

  const handleAnnounce = async () => {
    await announce(payload);
  }

  const announce = async (_payload: string) => {
    setHash('*'.repeat(64));
    setAnimationState('wait');
    const node = await getActiveNode();
    const result: { payload: string, hash: string } | { error: any } = await TransactionService.announceTransaction(node, (process.env.NEXT_PUBLIC_BACKEND as string), _payload);
    if ('error' in result) {
      // 失敗したら ErrorMessage を表示
      setAnimationState('fail');
      setErrorMessage(result.error)
      setErrorState('first');
      console.error(result.error);
    } else {
      // 成功したら Hashをセットし検証用ボタン（Get）を表示
      setHash(result.hash);
      setAnimationState('present');
    };
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
        {isGetTreasureLoading ? 
          <YStack>
            <Spinner size="large" />
            <Paragraph fontSize={12} marginTop={10}>結果が出るまで離れずに待っててね。</Paragraph>
            <Paragraph fontSize={12}>※ページから離れてもモンスターは送信されます。</Paragraph>
          </YStack> 
          : <Paragraph>Success! Would you like to get eggs?</Paragraph>}
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
          <XStack space={'$4'} ai={'center'}>
            <Input f={1} placeholder="Transaction Hash" value={hash} onChangeText={setHash} />
            <Button icon={<Copy />} onPress={()=>handleCopy(hash)} />
            <Button icon={<ClipboardPaste />} onPress={handlePasteHash} />
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
            <Button icon={<ClipboardPaste />} onPress={handlePastePayload} />
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
        {
          errorState === 'first' && 
          <Button onPress={()=>{
            router.push({
              pathname: '/',
            });
          }}>START</Button>
        }
        {
          errorState === 'second' && 
          <Button themeInverse onPress={handleGetTreasure}>
            Retry...
          </Button>
        }
        </YStack>
        <View height={150} />
      </YStack>
    );
  }
}
