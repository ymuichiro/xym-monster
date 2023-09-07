import { H1, Image, ListItem, ScrollView, Separator, SheetBase, YGroup, YStack } from '../index';
import { useState } from 'react';
import { GameDetailsSheet, GameDetailsSheetProps } from '../components/GameDetailsSheet';

export interface GameInfoEvents {
  onPress: (e: GameDetailsSheetProps) => void;
}

export interface GameTabProps {
  items: GameDetailsSheetProps[];
}

export function GamesTab(props: GameTabProps): JSX.Element {
  const [gameDetail, setGameDetail] = useState<GameDetailsSheetProps | null>(null);

  const handleOpenSheet = (e: GameDetailsSheetProps) => {
    setGameDetail(e);
  };

  const handleCloseSheet = () => {
    setGameDetail(null);
  };

  return (
    <YStack f={1} padding="$4" space={'$4'}>
      <H1>Games</H1>
      <YGroup bordered separator={<Separator />}>
        {props.items.map((item, index) => (
          <GameItem key={index} {...item} onPress={handleOpenSheet} />
        ))}
      </YGroup>
      <SheetBase isOpen={Boolean(gameDetail)} onOpenChange={handleCloseSheet}>
        <ScrollView ai={'center'} showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
          {gameDetail && <GameDetailsSheet {...gameDetail} />}
        </ScrollView>
      </SheetBase>
    </YStack>
  );
}

function GameItem(props: GameDetailsSheetProps & GameInfoEvents): JSX.Element {
  const handleOnPress = () => {
    props.onPress(props);
  };

  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title={props.name}
        subTitle={props.subTitle}
        icon={<Image source={{ uri: props.icon, height: 100, width: 100 }} />}
        onPress={handleOnPress}
      />
    </YGroup.Item>
  );
}
