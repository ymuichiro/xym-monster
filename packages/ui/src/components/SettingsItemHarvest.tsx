import { Button } from '@tamagui/button';
import { Card } from '@tamagui/card';
import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { CheckCircle, Circle } from '@tamagui/lucide-icons';
import { YStack } from '@tamagui/stacks';
import { H3, H5, Paragraph } from '@tamagui/text';
import { useState } from 'react';
import { Input } from 'tamagui';

interface SettingsItemHarvestProps {
  sheetName: string;
}

export function SettingsItemHarvest(props: SettingsItemHarvestProps): JSX.Element {
  const [harvestingStatus, setHarvestingStatus] = useState<'Active' | 'Inactive'>('Inactive');
  const [currentImportance, setCurrentImportance] = useState<number>(0);
  const [currentNode, setCurrentNode] = useState<string | null>(null);

  const handleGetCurrentStatus = () => {
    // ハーベスティングステータスの取得
    setHarvestingStatus('Active');
  };

  const handleGetCurrentImportance = () => {
    // 現在の importrance の取得
    setCurrentImportance(0.1);
  };

  const handleStartHarvesting = () => {
    // ハーベスティングの開始
    setHarvestingStatus('Active');
  };

  const handleStopHarvesting = () => {
    // ハーベスティングの停止
    setHarvestingStatus('Inactive');
  };

  return (
    <YStack f={1} ai="stretch" jc="flex-start" space={'$6'}>
      <H3>{props.sheetName}</H3>
      <YStack space="$2">
        <H5 textAlign="left">Status</H5>
        <Card backgroundColor={harvestingStatus ? '$gray6' : '$green11Light'} padding="$3">
          <Card.Header>
            <H3>{harvestingStatus}</H3>
            <Paragraph>{`importance ${currentImportance}`}</Paragraph>
          </Card.Header>
          <Card.Footer>
            <Paragraph>{`node ${currentNode === null ? 'No node' : currentNode}`}</Paragraph>
          </Card.Footer>
        </Card>
      </YStack>
      {harvestingStatus === 'Active' ? (
        <Harvesting onStopHarvesting={handleStopHarvesting} />
      ) : (
        <HarvestYet onSubmit={handleStartHarvesting} />
      )}
    </YStack>
  );
}

interface HarvestYetProps {
  onSubmit: () => void;
}

function HarvestYet(props: HarvestYetProps): JSX.Element {
  const [destinationNode, setDestinationNode] = useState<'auto' | 'manual'>('auto');

  const handleChangeDestinationNodeToAuto = () => {
    setDestinationNode('auto');
  };
  const handleChangeDestinationNodeToManual = () => {
    setDestinationNode('manual');
  };

  return (
    <YStack space={'$6'}>
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
      <Button themeInverse onPress={props.onSubmit}>
        Submit
      </Button>
    </YStack>
  );
}

interface HarvestingProps {
  onStopHarvesting: () => void;
}

function Harvesting(props: HarvestingProps): JSX.Element {
  const [last30DaysHarvestingIncome, setLast30DaysHarvestingIncome] = useState<number>(0);

  const handleGetLast30DaysHarvestingIncome = () => {
    // 直近30日間のハーベスティング収入の取得
    setLast30DaysHarvestingIncome(0.1);
  };

  return (
    <YStack space={'$6'}>
      <YStack space="$2">
        <H5 textAlign="left">Harvested</H5>
        <Card backgroundColor={'$gray6'} padding="$3">
          <Card.Header>
            <H5>last 30 days</H5>
          </Card.Header>
          <Card.Footer>
            <Paragraph>{last30DaysHarvestingIncome}</Paragraph>
          </Card.Footer>
        </Card>
      </YStack>
      <Button themeInverse onPress={props.onStopHarvesting}>
        Stop
      </Button>
    </YStack>
  );
}
