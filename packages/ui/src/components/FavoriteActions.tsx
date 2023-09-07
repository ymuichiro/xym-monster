import { Button } from '@tamagui/button';
import { Camera, QrCode } from '@tamagui/lucide-icons';
import { XStack, YStack } from '@tamagui/stacks';
import { Paragraph } from '@tamagui/text';

interface Props {
  onPressMyQR: () => void;
  onPressReadQR: () => void;
}

/**
 * Cards displaying frequently used actions
 */
export function FavoriteActions(props: Props): JSX.Element {
  const buttons = [
    {
      icon: QrCode,
      label: 'My QR',
      onpress: props.onPressMyQR,
    },
    {
      icon: Camera,
      label: 'Read QR',
      onpress: props.onPressReadQR,
    },
  ];

  return (
    <XStack justifyContent="space-evenly" flexWrap="wrap">
      {buttons.map((button, index) => {
        return (
          <YStack key={index} alignItems="center">
            <Button icon={button.icon} circular onPress={button.onpress} />
            <Paragraph theme="alt1" size={'$1'}>
              {button.label}
            </Paragraph>
          </YStack>
        );
      })}
    </XStack>
  );
}
