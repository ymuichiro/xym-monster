import { Button, H3, Image, Paragraph, YStack } from '../index';
import { Dimensions } from 'react-native';

export interface GameDetailsSheetProps {
  name: string;
  subTitle: string;
  description: string;
  link: string;
  icon: string;
}

export function GameDetailsSheet(props: GameDetailsSheetProps): JSX.Element {
  const sheetContentWidth = Dimensions.get('window').width - 32;

  return (
    <YStack f={1} width={sheetContentWidth} space={'$4'}>
      <Image source={{ uri: props.icon, height: 250, width: sheetContentWidth }} borderRadius={'$4'} />
      <H3>{props.name}</H3>
      <Button accessibilityRole="link" href={props.link} target="_blank" rel="noreferrer noopener">
        PLAY
      </Button>
      <Paragraph>{props.description}</Paragraph>
    </YStack>
  );
}
