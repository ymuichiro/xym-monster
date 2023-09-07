import { H1, ListItem, Separator, SizableText, Tabs, YStack } from '../index';
import { ChevronRight, History } from '@tamagui/lucide-icons';

export interface HistoryTabProps {
  address: string;
  networkType: 104 | 152;
}

export function HistoryTab(props: HistoryTabProps): JSX.Element {
  // TODO: 非同期で履歴情報を取得するロジックの追加

  return (
    <YStack padding="$4" space={'$4'}>
      <H1>History</H1>
      <Tabs
        defaultValue="all"
        flexDirection="column"
        orientation="horizontal"
        borderWidth="$0.25"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.List separator={<Separator vertical />} disablePassBorderRadius="bottom">
          <Tabs.Tab flexGrow={1} value="all" backgroundColor={'$background'}>
            <SizableText>Confirmed</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flexGrow={1} value="unsigned">
            <SizableText>UnSigned</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flexGrow={1} value="unconfirmed">
            <SizableText>Harvesting</SizableText>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content f={1} value="all">
          <YStack f={1} ai="center" jc="center">
            {new Array(30).fill(null).map((_, i) => {
              return (
                <ListItem
                  key={i}
                  hoverTheme
                  pressTheme
                  title="トランザクション"
                  subTitle="Subtitle"
                  icon={History}
                  iconAfter={ChevronRight}
                  backgroundColor={'$backgroundStrong'}
                />
              );
            })}
          </YStack>
        </Tabs.Content>
        <Tabs.Content value="unsigned">
          <YStack f={1} ai="center" jc="center">
            {new Array(30).fill(null).map((_, i) => {
              return (
                <ListItem
                  key={i}
                  hoverTheme
                  pressTheme
                  title="未署名トランザクション"
                  subTitle="Subtitle"
                  icon={History}
                  iconAfter={ChevronRight}
                  backgroundColor={'$backgroundStrong'}
                />
              );
            })}
          </YStack>
        </Tabs.Content>
        <Tabs.Content value="unconfirmed">
          <YStack f={1} ai="center" jc="center">
            {new Array(30).fill(null).map((_, i) => {
              return (
                <ListItem
                  key={i}
                  hoverTheme
                  pressTheme
                  title="未承認トランザクション"
                  subTitle="Subtitle"
                  icon={History}
                  iconAfter={ChevronRight}
                  backgroundColor={'$backgroundStrong'}
                />
              );
            })}
          </YStack>
        </Tabs.Content>
      </Tabs>
    </YStack>
  );
}
