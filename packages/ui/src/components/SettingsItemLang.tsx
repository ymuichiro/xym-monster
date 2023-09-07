import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { CheckCircle, Circle } from '@tamagui/lucide-icons';
import { YStack } from '@tamagui/stacks';
import { H3 } from '@tamagui/text';

interface SettingsItemLangProps {
  sheetName: string;
}

export function SettingsItemLang(props: SettingsItemLangProps): JSX.Element {
  return (
    <YStack f={1} ai="stretch" jc="flex-start" space={'$4'}>
      <H3 textAlign="left">{props.sheetName}</H3>
      <YGroup>
        <YGroup.Item>
          <ListItem hoverTheme pressTheme title={'english'} icon={CheckCircle} />
          <ListItem hoverTheme pressTheme title={'japanese（準備中）'} icon={Circle} />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
}
