import { Button } from '@tamagui/button';
import { Copy, Delete, Key, Wallet } from '@tamagui/lucide-icons';
import { Separator } from '@tamagui/separator';
import { YStack } from '@tamagui/stacks';
import { H3, SizableText } from '@tamagui/text';

export interface AccountDetails {
  accountName: string;
  address: string;
  publicKey: string;
}

export interface AccountDetailsSheetProps extends AccountDetails {}

export function AccountDetailsSheet(props: AccountDetailsSheetProps): JSX.Element {
  return (
    <YStack f={1} space={'$4'}>
      <H3 textAlign="left">{props.accountName}</H3>
      <SizableText>{props.address}</SizableText>
      <Separator />
      <Button textAlign="left" icon={Copy} style={{ justifyContent: 'stretch' }}>
        |&nbsp;Copy Address
      </Button>
      <Button textAlign="left" icon={Key} style={{ justifyContent: 'stretch' }}>
        |&nbsp;Copy public key
      </Button>
      <Button textAlign="left" icon={Wallet} style={{ justifyContent: 'stretch' }}>
        |&nbsp;Make this account the default
      </Button>
      <Button textAlign="left" theme="red" icon={Delete} style={{ justifyContent: 'stretch' }}>
        |&nbsp;Delete this account
      </Button>
    </YStack>
  );
}
