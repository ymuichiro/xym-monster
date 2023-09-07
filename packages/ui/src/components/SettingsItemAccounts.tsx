import { Button } from '@tamagui/button';
import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { CheckCircle, MoreHorizontal } from '@tamagui/lucide-icons';
import { ScrollView } from '@tamagui/scroll-view';
import { Separator } from '@tamagui/separator';
import { Sheet } from '@tamagui/sheet';
import { XStack, YStack } from '@tamagui/stacks';
import { H3, H6, SizableText } from '@tamagui/text';
import { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { AlertDialog } from 'tamagui';
import { AccountDetails, AccountDetailsSheet } from '../components/AccountDetailsSheet';

interface SettingsItemAccountsProps {
  sheetName: string;
}

interface AccountItemEvents {
  onPress: (e: AccountDetails) => void;
}

export function SettingsItemAccounts(props: SettingsItemAccountsProps): JSX.Element {
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null);
  const [position, setPosition] = useState(0);

  const handleOpenSheet = (e: AccountDetails) => {
    setAccountDetails(e);
  };

  const handleCloseSheet = () => {
    setAccountDetails(null);
  };

  return (
    <YStack f={1} ai="stretch" jc="flex-start" space={'$4'}>
      {/* content */}
      <H3 textAlign="left">{props.sheetName}</H3>
      <YGroup bordered separator={<Separator />}>
        {[
          {
            accountName: 'MAIN-WALLET',
            address: 'NCZXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            publicKey: 'jeajakjakmamrkaenkaejrkawnkajtankak',
          },
          {
            accountName: 'MAIN-WALLET',
            address: 'NCZXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            publicKey: 'jeajakjakmamrkaenkaejrkawnkajtankak',
          },
          {
            accountName: 'MAIN-WALLET',
            address: 'NCZXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            publicKey: 'jeajakjakmamrkaenkaejrkawnkajtankak',
          },
        ].map((item, index) => (
          <AccountItem key={index} {...item} onPress={handleOpenSheet} />
        ))}
      </YGroup>
      {/* modal */}
      <Sheet
        modal
        open={Boolean(accountDetails)}
        onOpenChange={handleCloseSheet}
        snapPoints={[60]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <ScrollView f={1} showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
            {accountDetails && <AccountDetailsSheet {...accountDetails} />}
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
      {/* Dialog */}
      <AlertDialogDemo />
    </YStack>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog modal open={true}>
      <AlertDialog.Trigger asChild>
        <Button>Show Alert</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          zIndex={3000000}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          zIndex={3000001}
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
            <AlertDialog.Title>Accept</AlertDialog.Title>
            <AlertDialog.Description>By pressing yes, you accept our terms and conditions.</AlertDialog.Description>
            <XStack space="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button theme="active">Accept</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}

function AccountItem(props: AccountDetails & AccountItemEvents): JSX.Element {
  const handleOpenSheet = (e: GestureResponderEvent) => {
    e.stopPropagation();
    props.onPress(props);
  };

  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        onPress={(e) => {
          console.log('pressed');
        }}
        title={
          <YStack>
            <H6>MAIN-WALLET</H6>
            <SizableText theme="alt1">NCZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</SizableText>
            <XStack marginTop="$4" ai="center">
              <XStack flexGrow={1}>
                <Button themeInverse icon={<MoreHorizontal />} circular scale={0.8} onPress={handleOpenSheet} />
              </XStack>
              <H6>{`${(10000).toLocaleString()} xym`}</H6>
            </XStack>
          </YStack>
        }
        icon={CheckCircle}
      />
    </YGroup.Item>
  );
}
