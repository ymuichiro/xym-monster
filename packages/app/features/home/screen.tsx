import { GamesTab, HistoryTab, ScrollView, SettingsTab, SizableText, Tabs, WalletTab, YStack } from '@my/ui';
import { Gamepad2, History, Settings, Wallet } from '@tamagui/lucide-icons';
import LogoSymbolLine from 'app/assets/icons/logo-symbol-line.png';
import { GAMES_INFO } from 'app/assets/jsons/games';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const ADDRESS = 'NDKPZZKCKHSXOZ7Q6B6JICUOSBNV5GTZIOBCO3I';

export function HomeScreen() {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  return (
    <YStack f={1}>
      <Tabs
        defaultValue="wallet"
        orientation="horizontal"
        flexDirection="column"
        overflow="hidden"
        borderColor="$borderColor"
      >
        {/* -- content -- */}
        <Tabs.Content value="wallet">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <WalletTab
              address={ADDRESS}
              background={LogoSymbolLine.src}
              networkType={152}
              mosaics={new Array(30).fill(null).map(() => ({ id: 'symbol.xym', amount: 1000000 }))}
            />
          </ScrollView>
        </Tabs.Content>
        <Tabs.Content value="history">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <HistoryTab address={ADDRESS} networkType={152} />
          </ScrollView>
        </Tabs.Content>
        <Tabs.Content value="games">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <GamesTab items={GAMES_INFO} />
          </ScrollView>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <SettingsTab address={ADDRESS} networkType={152} />
          </ScrollView>
        </Tabs.Content>
        {/* -- list -- */}
        <Tabs.List
          f={1}
          disablePassBorderRadius="bottom"
          borderTopWidth="$0.5"
          borderTopColor="$borderColor"
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
          }}
        >
          <Tabs.Tab value="wallet" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Wallet />
              <SizableText theme="alt1" size="$1">
                wallet
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="history" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <History />
              <SizableText theme="alt1" size="$1">
                history
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="games" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Gamepad2 />
              <SizableText theme="alt1" size="$1">
                games
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="settings" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Settings />
              <SizableText theme="alt1" size="$1">
                Setting
              </SizableText>
            </YStack>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </YStack>
  );
}
