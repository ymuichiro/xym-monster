import {
  Button,
  ConfirmedButton,
  Input,
  Label,
  Paragraph,
  ScrollView,
  SizableText,
  Switch,
  XStack,
  YStack,
} from '@my/ui';
import { ArrowLeft, AtSign, Database, MinusCircle, Plus } from '@tamagui/lucide-icons';
import { TextService } from 'app/services/text-service';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useLink } from 'solito/link';
import { useRouter } from 'solito/router';

export function PaymentSendScreen(): JSX.Element {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);
  const [address, setAddress] = useState<string>('');
  const [mosaic, setMosaic] = useState<{ id: string; amount: number }[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isEncrypt, setIsEncrypt] = useState<boolean>(false);
  const router = useRouter();
  const linkProps = useLink({
    href: '/',
  });

  const handleChangeMosaicId = (index: number, value: string) => {
    const _mosaic = mosaic.map((e, i) => {
      if (i === index) return { ...e, id: value };
      return e;
    });
    setMosaic(_mosaic);
  };

  const handleBlurMosaic = () => {
    // 入力値に一致するモザイク、または namespace が存在するか確認し、一致した explorer を表示する
    // これは submit で
  };

  const handleChangeAmount = (index: number, value: string) => {
    const _mosaic = mosaic.map((e, i) => {
      const _amount = TextService.numericInputSuppor(value);
      if (i === index && _amount) return { ...e, amount: _amount };
      return e;
    });
    setMosaic(_mosaic);
  };

  const handleAddMosaic = () => {
    setMosaic([...mosaic, { id: 'symbol.xym', amount: 0 }]);
  };

  const handleDeleteMosaic = (index: number) => {
    const _mosaic = mosaic.filter((_, i) => i !== index);
    setMosaic(_mosaic);
  };

  const handlePressModalAccept = () => {
    // 送信用画面へ転送
    router.push({
      query: { address, mosaic: JSON.stringify(mosaic), message, isEncrypt: isEncrypt ? 'true' : 'false', path: '/payment/action/announce'},
      pathname: '/payment/action/wait',
    });
  };

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  return (
    <ScrollView f={1} style={{ height, paddingBottom: 100 }}>
      <YStack padding="$4" space="$2">
        <XStack alignItems="center">
          <Button {...linkProps} chromeless icon={ArrowLeft} circular />
          <SizableText>Home</SizableText>
        </XStack>
        <YStack>
          <XStack>
            <Label paddingLeft="$1" htmlFor="address" flexGrow={1}>
              Address
            </Label>
            <Button icon={AtSign} circular scale={0.8} />
          </XStack>
          <Input id="address" placeholder="address" value={address} onChangeText={setAddress} />
        </YStack>
        <Label paddingLeft="$1" htmlFor="mosaic" flexGrow={1}>
          Mosaic
        </Label>
        <YStack space={'$4'}>
          {mosaic.map((item, index) => (
            <YStack key={index} space="$2">
              <XStack space={'$2'}>
                <Input
                  id="mosaic"
                  flexGrow={1}
                  placeholder="mosaic"
                  value={item.id}
                  onChangeText={(e) => handleChangeMosaicId(index, e)}
                />
                <Button icon={Database} circular scale={0.8} />
              </XStack>
              <XStack space={'$2'}>
                <Input
                  flexGrow={1}
                  keyboardType="number-pad"
                  placeholder="amount"
                  value={item.amount.toString()}
                  onChangeText={(e) => handleChangeAmount(index, e)}
                />
                <Button icon={MinusCircle} circular scale={0.8} onPress={() => handleDeleteMosaic(index)} />
              </XStack>
            </YStack>
          ))}
          <Button icon={Plus} size={'$3'} onPress={handleAddMosaic} />
        </YStack>
        <YStack>
          <Label paddingLeft="$1" htmlFor="message">
            Message
          </Label>
          <Input id="message" placeholder="message" multiline rows={4} value={message} onChangeText={setMessage} />
        </YStack>
        <XStack jc="flex-end" ai="center" space="$4">
          <Label paddingRight="$0" justifyContent="flex-end" htmlFor="encrypt">
            Encrypt
          </Label>
          <Switch id="encrypt" size={'$2'} checked={isEncrypt} onCheckedChange={setIsEncrypt}>
            <Switch.Thumb animation={'quick'} />
          </Switch>
        </XStack>
        <YStack justifyContent="center" padding="$4">
          <ConfirmedButton
            button={{ title: 'SUBMIT' }}
            content={{
              title: 'To be Confirm?',
              description: 'If all is well, we will begin signing.',
              onPressAccept: handlePressModalAccept,
            }}
          >
            <CheckModalInner address={address} mosaic={mosaic} message={message} isEncrypt={isEncrypt} />
          </ConfirmedButton>
        </YStack>
      </YStack>
    </ScrollView>
  );
}

interface CheckModalProps {
  address: string;
  mosaic: { id: string; amount: number }[];
  message: string;
  isEncrypt: boolean;
}

function CheckModalInner(props: CheckModalProps): JSX.Element {
  return (
    <YStack space={'$4'}>
      <YStack>
        <Paragraph size="$4">Address</Paragraph>
        <SizableText theme="alt1">{props.address}</SizableText>
      </YStack>
      <YStack>
        <Paragraph size="$4">Mosaic</Paragraph>
        {props.mosaic.map((e, i) => (
          <YStack key={i}>
            <SizableText theme="alt1">{e.id}</SizableText>
            <SizableText theme="alt1">{e.amount}</SizableText>
          </YStack>
        ))}
      </YStack>
      <YStack>
        <Paragraph size="$4">Message</Paragraph>
        <SizableText theme="alt1">{props.message}</SizableText>
      </YStack>
      <YStack>
        <Paragraph size="$4">Encrypt</Paragraph>
        <SizableText theme="alt1">{props.isEncrypt ? 'ON' : 'OFF'}</SizableText>
      </YStack>
    </YStack>
  );
}
