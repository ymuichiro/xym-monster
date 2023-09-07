import { Button } from '@tamagui/button';
import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { CheckCircle, Circle } from '@tamagui/lucide-icons';
import { YStack } from '@tamagui/stacks';
import { H3, H5, Paragraph } from '@tamagui/text';
import { useState } from 'react';
import { Input } from 'tamagui';

interface SettingsItemNetworkProps {
  sheetName: string;
}

export function SettingsItemNetwork(props: SettingsItemNetworkProps): JSX.Element {
  const [networkType, setNetworkType] = useState<number>(104);
  const [destinationNode, setDestinationNode] = useState<'auto' | 'manual'>('auto');

  const handleChangeNetworkTypeToMainnet = () => {
    setNetworkType(104);
  };
  const handleChangeNetworkTypeToTestnet = () => {
    setNetworkType(152);
  };
  const handleChangeDestinationNodeToAuto = () => {
    setDestinationNode('auto');
  };
  const handleChangeDestinationNodeToManual = () => {
    setDestinationNode('manual');
  };
  const handleSubmit = () => {
    // pass
  };

  return (
    <YStack f={1} ai="stretch" jc="flex-start" space={'$6'}>
      <H3 textAlign="left">{props.sheetName}</H3>
      <Paragraph theme={'alt1'}>Press the confirm button to complete the configuration</Paragraph>
      <YStack>
        <H5 textAlign="left">Network Type</H5>
        <YGroup>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title={'MAIN-NET'}
              icon={networkType === 104 ? CheckCircle : Circle}
              onPress={handleChangeNetworkTypeToMainnet}
            />
            <ListItem
              hoverTheme
              pressTheme
              title={'TEST-NET'}
              icon={networkType === 152 ? CheckCircle : Circle}
              onPress={handleChangeNetworkTypeToTestnet}
            />
          </YGroup.Item>
        </YGroup>
      </YStack>
      <YStack>
        <H5 textAlign="left">Destination node</H5>
        <YGroup>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title={'Automatic'}
              icon={destinationNode === 'auto' ? CheckCircle : Circle}
              onPress={handleChangeDestinationNodeToAuto}
            />
            <ListItem
              hoverTheme
              pressTheme
              title={'Manual'}
              icon={destinationNode === 'manual' ? CheckCircle : Circle}
              onPress={handleChangeDestinationNodeToManual}
            />
          </YGroup.Item>
        </YGroup>
        {destinationNode === 'manual' && (
          <YStack padding="$2">
            <Input placeholder="接続したいノードのURLを入力して下さい" />
            <Paragraph theme={'alt1'} margin="$2">
              example: http&#40;s&#41;://domain:port
            </Paragraph>
          </YStack>
        )}
      </YStack>
      <Button onPress={handleSubmit}>SUBMIT</Button>
    </YStack>
  );
}
